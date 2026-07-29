# Jobber Job Form 2 — Weekly Supervisor Audit

**Attach to:** a weekly recurring "Audit" job per site.
**Completed by:** the supervisor (your 70% contractor) — *not* the cleaner who did the work.
**Purpose:** independent scored inspection. This is the accountability lever: the audit score is how you hold the contractor to standard.

> **The supervisor only taps Pass / Fail / N/A on each item — no maths, no typing percentages.** Scoring is computed automatically downstream (see "Scoring — done for you" below). Every item below is a **Pass / Fail / N/A dropdown**; add one dropdown *per line*, not one per zone.
>
> Reference only — the formula the software applies: `Zone % = Passes ÷ (Passes + Fails) × 100`. N/A items drop out of the maths entirely.

---

## Header
| Field | Type | Required |
|-------|------|----------|
| Site / practice name | Short text (auto) | ✔ |
| Auditor name | Short text | ✔ |
| Date | Auto | ✔ |

## 🔴 Red — Bathrooms (target ≥ 90%)
Each: **Pass / Fail / N/A** (dropdown)
- Toilets/urinals visibly clean, no residue
- Basins, taps, mirrors streak-free
- Floors & skirting clean
- Consumables stocked
- Correct (red) equipment evidence / no cross-zone gear
- Waste emptied, bin liners fresh

## 🟡 Yellow — Clinical (target ≥ 95%)
Each: **Pass / Fail / N/A**
- Exam beds/vinyl clean, no marks
- High-touch points clean (spot-check 5)
- Surfaces dust-free
- Floors clean to edges
- Sharps/clinical waste correct
- No cross-zone equipment present
- Disinfectant in use is TGA-listed

## 🟢 Green — General (target ≥ 90%)
Each: **Pass / Fail / N/A**
- Reception/counter clean
- Seating & arms clean
- Door hardware/switches clean
- Floors clean
- Bins emptied

## 🔵 Blue — Kitchen (target ≥ 90%)
Each: **Pass / Fail / N/A**
- Benches/sink clean
- Appliances wiped
- Bins emptied

## Defects & corrective actions
> Log every Fail here. Each becomes a corrective action with a **24-hour** deadline (KPI #6).

| Field | Type |
|-------|------|
| Defect 1 — zone, location, issue | Long text |
| Defect 1 — photo | Photo |
| Defect 1 — due (default +24h) | Date |
| Defect 1 — assigned to | Short text |
| (repeat rows 2–5 as needed) | |

## Close-out (the only thing the supervisor adds)
| Field | Type | Required |
|-------|------|----------|
| Auditor sign-off | Signature / completion | ✔ |

There are **no percentage fields to fill in.** Zone scores, overall score, and defect count are all calculated from the Pass/Fail/N/A answers above — the supervisor never types a number.

---

## Scoring — done for you (no supervisor maths)

Jobber captures the ratings; the **percentages are computed automatically** from them. Two ways this happens:

1. **Built-in (once the dashboard is live):** the ratings sync via the Jobber API and `/portal/qc` computes every zone % using `zoneScoreFromRatings()` in `src/lib/qc/kpis.ts`. Nothing manual.
2. **Interim, no-code (works before the dashboard is wired):** connect Jobber → **Zapier** → a Google Sheet. The Sheet holds the formula `= passes / (passes + fails)` per zone and shows the score the moment a checklist is submitted.

Either way the supervisor's job is simply: **rate each item, log any fails as defects, sign off.**

> Trade-off to know: because Jobber can't calculate in-app, the supervisor won't see the % *inside Jobber* right after the audit — it appears on the dashboard / Sheet. If you ever need an instant on-site score, the Zapier→Sheet route (or a small tap-to-score tool) gives it.

### Dashboard mapping
- Per-item Pass/Fail/N/A → auto-computed zone % → **Audit pass rate** KPIs #1 & #2, trended per site.
- Any **Fail** → log it in Defects → **Corrective-action tracker** + **Defect rectification time** (KPI #6).
- A computed Yellow score below 95% auto-flags for a re-audit before the next client report.
