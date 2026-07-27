import { EstimateData } from '../components/estimate/EstimateFlow'
import { EstimateBreakdown } from './pricing'

/* ─────────────────────────────────────────────────────────────
   GHL LEAD CAPTURE
   Posts the completed estimate + contact details into GoHighLevel
   via an inbound webhook.

   SETUP:
   1. In GHL: Automation → Workflows → create a workflow with an
      "Inbound Webhook" trigger. Copy the webhook URL.
   2. Paste it into NEXT_PUBLIC_GHL_WEBHOOK_URL in your .env.local:
        NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/xxxx
   3. In the GHL workflow, map the incoming fields (name, email,
      phone, etc.) to contact fields + create the opportunity.

   The payload below sends everything the workflow needs to create
   a contact, tag it, and populate a pipeline opportunity.
   ───────────────────────────────────────────────────────────── */

const SPACE_LABELS: Record<string, string> = {
  'gp-practice': 'GP Practice',
  'specialist-clinic': 'Specialist Clinic',
  'allied-health': 'Allied Health',
  'medical-centre': 'Medical Centre',
  'day-surgery': 'Day Surgery',
  'other': 'Other',
}

export async function sendLeadToGHL(
  data: EstimateData,
  estimate: EstimateBreakdown
): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('[Zenith] GHL webhook URL not set — lead not sent.')
    return false
  }

  // Split name into first / last for GHL contact fields
  const nameParts = (data.name || '').trim().split(/\s+/)
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  const payload = {
    // Standard GHL contact fields
    firstName,
    lastName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    companyName: data.practice,

    // Source + tagging
    source: 'Website — AI Estimate',
    tags: ['estimate-lead', 'racgp', SPACE_LABELS[data.spaceType] || 'other'],

    // Custom fields — the estimate detail (map these in the GHL workflow)
    estimate_space_type: SPACE_LABELS[data.spaceType] || data.spaceType,
    estimate_size_sqm: data.sizeSqm,
    estimate_days_per_week: data.daysPerWeek,
    estimate_selected_days: (data.selectedDays || []).join(', '),
    estimate_timing: data.timing === 'after-hours' ? 'After hours' : 'Business hours',
    estimate_monthly_total: estimate.monthlyTotal,
    estimate_monthly_low: estimate.rangeLow,
    estimate_monthly_high: estimate.rangeHigh,
    estimate_monthly_inc_gst: estimate.monthlyIncGST,
    estimate_per_visit: estimate.perVisit,
    estimate_visits_per_month: estimate.visitsPerMonth,

    // Timestamp
    submitted_at: new Date().toISOString(),
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error('[Zenith] GHL webhook returned', res.status)
      return false
    }
    return true
  } catch (err) {
    console.error('[Zenith] Failed to send lead to GHL:', err)
    return false
  }
}
