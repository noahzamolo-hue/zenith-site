# Jobber Job Form 2 — Weekly Supervisor Audit

**Attach to:** a weekly recurring "Audit" job per site.
**Completed by:** the supervisor (your 70% contractor) — *not* the cleaner who did the work.
**Purpose:** independent scored inspection. This is the accountability lever: the audit score is how you hold the contractor to standard.

> Scoring model: each item is **Pass / Fail / N/A**. Zone score = passes ÷ applicable items. Jobber can't auto-average — enter the % in the summary fields at the bottom so the dashboard reads them.

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

## Summary (dashboard reads these)
| Field | Type | Required |
|-------|------|----------|
| Red zone score % | Number | ✔ |
| Yellow zone score % | Number | ✔ |
| Green zone score % | Number | ✔ |
| Blue zone score % | Number | ✔ |
| Overall site score % | Number | ✔ |
| Number of defects logged | Number | ✔ |
| Auditor sign-off | Signature | ✔ |

---

### Dashboard mapping
- Zone score % fields → **Audit pass rate** KPIs #1 & #2, trended per site over time.
- Defects + due dates → **Corrective-action tracker** and **Defect rectification time** (KPI #6).
- A Yellow score below 95% should trigger a re-audit before the next client report.
