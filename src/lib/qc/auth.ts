/* ─────────────────────────────────────────────────────────────
   PORTAL AUTH (simple internal login)
   A single shared password gates the /portal/qc dashboard.
   Set QC_PORTAL_PASSWORD in .env.local to change it from the
   default. This is an internal tool, not public — the goal is a
   basic login wall, not multi-user identity.
   ───────────────────────────────────────────────────────────── */

import { cookies } from 'next/headers'

export const PORTAL_COOKIE = 'zqc_session'

const IS_PROD = process.env.NODE_ENV === 'production'

// Secrets MUST come from env in production. The dev-only defaults let you
// log in locally; in production, if the env vars aren't set the portal is
// LOCKED (fail closed) — so the values baked into the repo can never be
// used to log in or forge a session on the live site.
const PASSWORD = process.env.QC_PORTAL_PASSWORD || (IS_PROD ? undefined : 'zenith')
const SESSION_VALUE = process.env.QC_PORTAL_SESSION || (IS_PROD ? undefined : 'zenith-portal-authed-dev')

export function checkPassword(pw: string): boolean {
  return !!PASSWORD && pw === PASSWORD
}

export async function isAuthed(): Promise<boolean> {
  if (!SESSION_VALUE) return false // prod without a session secret → locked
  const store = await cookies()
  return store.get(PORTAL_COOKIE)?.value === SESSION_VALUE
}

export async function setAuthCookie(): Promise<void> {
  if (!SESSION_VALUE) return
  const store = await cookies()
  store.set(PORTAL_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}

export async function clearAuthCookie(): Promise<void> {
  const store = await cookies()
  store.set(PORTAL_COOKIE, '', { path: '/', maxAge: 0 })
}
