# Jobber Job Form 3 — High-Touch Verification (UV + ATP)

**Attach to:** monthly verification job (weekly for Yellow-heavy sites).
**Completed by:** supervisor.
**Purpose:** *objective* proof that high-touch surfaces were actually cleaned — the evidence that wins accreditation-conscious clinics. Two methods:

- **UV gel marker** — invisible dot placed last visit; if it's gone, the point was wiped. Pass/Fail. (See `sop-uv-marker-audit.md`.)
- **ATP swab** — luminometer returns an **RLU** number; lower = cleaner. (See `sop-atp-testing.md`.)

> Run UV and ATP on the **same** high-touch points so the two methods corroborate each other.

> **No maths, no counting.** The supervisor only records raw readings: tap **Pass/Fail** per UV point, and type the **RLU number** per ATP surface. UV pass %, ATP passed/taken, highest RLU, and each surface's pass/fail-vs-threshold are all computed automatically (see "Scoring — done for you" below).

---

## Header
| Field | Type | Required |
|-------|------|----------|
| Site / practice name | Short text (auto) | ✔ |
| Verified by | Short text | ✔ |
| Date | Auto | ✔ |

## UV marker audit
For each marked point, one **Pass / Fail dropdown** (Pass = marker removed, Fail = still present). Nothing to count — that's it.
| Point | Type |
|-------|------|
| Yellow — exam room door handle | Pass/Fail dropdown |
| Yellow — light switch | Pass/Fail dropdown |
| Yellow — exam bed rail | Pass/Fail dropdown |
| Red — bathroom tap | Pass/Fail dropdown |
| Green — reception counter edge | Pass/Fail dropdown |
| Green — waiting room chair arm | Pass/Fail dropdown |

## ATP swab readings (RLU)
Type the number off the luminometer. **Don't mark pass/fail** — the software compares each RLU to its zone threshold automatically. Thresholds shown in the label for reference: Yellow/clinical **< 250**, Red/Green/Blue **< 500** (confirm against your device — see SOP).
| Surface swabbed | Type |
|-----------------|------|
| Yellow — exam bed surface (pass < 250) | Number |
| Yellow — clinical door handle (pass < 250) | Number |
| Red — bathroom tap (pass < 500) | Number |
| Green — reception counter (pass < 500) | Number |
| Blue — kitchen bench (pass < 500) | Number |

## Close-out (the only thing the supervisor adds)
| Field | Type | Required |
|-------|------|----------|
| Verifier sign-off | Signature / completion | ✔ |

**No summary/percentage fields.** UV pass %, ATP passed/taken, highest RLU, and "re-clean triggered?" are all derived from the raw entries above — the supervisor never types a calculated number.

---

## Scoring — done for you (no supervisor maths)

Same as the weekly audit: Jobber captures the raw entries; the numbers are computed after submission.

1. **Built-in (dashboard live):** ratings + RLUs sync via the Jobber API and `/portal/qc` computes UV pass % with `zoneScoreFromRatings()` and each ATP pass/fail with `atpPass(rlu, zone)` — both in `src/lib/qc/kpis.ts`. Any UV Fail or ATP over threshold auto-raises a re-clean.
2. **Interim, no-code:** Jobber → Zapier → Google Sheet. `=COUNTIF(uv_range,"Pass")/COUNTA(uv_range)` for UV %; `=IF(rlu<threshold,"Pass","Re-clean")` per ATP surface.

### Dashboard mapping
- UV Pass/Fail answers → auto UV pass % → **KPI #3**.
- ATP RLUs → auto pass/fail vs threshold → **KPI #4**; the raw RLUs feed the **ATP trend chart**.
- Any Fail (UV present or ATP over threshold) → auto re-clean flag + corrective action.
- These readings are the headline numbers in the **monthly client compliance PDF** — objective, dated, defensible.
