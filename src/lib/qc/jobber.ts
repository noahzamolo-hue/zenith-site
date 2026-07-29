/* ─────────────────────────────────────────────────────────────
   JOBBER DATA SOURCE
   The dashboard calls getQCSnapshot(). Until Jobber is wired it
   returns sample data. To go live, implement fetchFromJobber()
   and set the env vars below.

   HOW TO WIRE JOBBER (GraphQL API):
   1. developer.getjobber.com → create an app → get Client ID/Secret.
   2. OAuth the app to your Jobber account; store the access token.
      Jobber tokens are short-lived — refresh with the refresh token.
   3. Set in .env.local:
        JOBBER_API_TOKEN=<access token>
      (or wire a proper OAuth refresh flow in getAccessToken()).
   4. Jobber exposes jobs + Job Form submissions via GraphQL at
        https://api.getjobber.com/api/graphql
      Query your three forms' submissions and map each field
      (see docs/qc-system/*) into the QCSnapshot shape.

   The dashboard is intentionally decoupled from this — swapping
   sample → live is a single function.
   ───────────────────────────────────────────────────────────── */

import type { QCSnapshot } from './types'
import { sampleSnapshot } from './sampleData'
import { realSnapshot } from './realData'

const JOBBER_GRAPHQL_URL = 'https://api.getjobber.com/api/graphql'
const JOBBER_API_VERSION = '2023-11-15' // pin; bump deliberately

/**
 * Returns the QC snapshot for the dashboard.
 * Falls back to sample data when Jobber isn't configured or errors,
 * so the dashboard always renders.
 */
export async function getQCSnapshot(): Promise<QCSnapshot> {
  // Manually-imported real data takes priority over sample data.
  const real = realSnapshot()
  if (real) return real

  const token = process.env.JOBBER_API_TOKEN
  if (!token) return sampleSnapshot()

  try {
    return await fetchFromJobber(token)
  } catch (err) {
    console.error('[Zenith QC] Jobber fetch failed, using sample data:', err)
    return sampleSnapshot()
  }
}

/**
 * TODO: implement live mapping.
 * Skeleton shows the request shape; the response → QCSnapshot mapping
 * depends on your exact Job Form field names (docs/qc-system/).
 */
async function fetchFromJobber(token: string): Promise<QCSnapshot> {
  // Example query shell — expand with your Job Form submission fields.
  const query = /* GraphQL */ `
    query QcData {
      jobs(first: 50, filter: { completed: true }) {
        nodes {
          id
          title
          completedAt
          # jobFormSubmissions / customFields go here once mapped
        }
      }
    }
  `

  const res = await fetch(JOBBER_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-JOBBER-GRAPHQL-VERSION': JOBBER_API_VERSION,
    },
    body: JSON.stringify({ query }),
    // Jobber data changes through the day; revalidate hourly.
    next: { revalidate: 3600 },
  })

  if (!res.ok) throw new Error(`Jobber API ${res.status}`)
  const json = await res.json()
  if (json.errors) throw new Error(`Jobber GraphQL: ${JSON.stringify(json.errors)}`)

  // Until the field mapping is filled in, don't silently ship empty
  // metrics — fall back to sample data.
  throw new Error('Jobber field mapping not implemented yet (see docs/qc-system/)')
}
