# Jobber Job Form 3 — High-Touch Verification (UV + ATP)

**Attach to:** monthly verification job (weekly for Yellow-heavy sites).
**Completed by:** supervisor.
**Purpose:** *objective* proof that high-touch surfaces were actually cleaned — the evidence that wins accreditation-conscious clinics. Two methods:

- **UV gel marker** — invisible dot placed last visit; if it's gone, the point was wiped. Pass/Fail. (See `sop-uv-marker-audit.md`.)
- **ATP swab** — luminometer returns an **RLU** number; lower = cleaner. (See `sop-atp-testing.md`.)

> Run UV and ATP on the **same** high-touch points so the two methods corroborate each other.

---

## Header
| Field | Type | Required |
|-------|------|----------|
| Site / practice name | Short text (auto) | ✔ |
| Verified by | Short text | ✔ |
| Date | Auto | ✔ |

## UV marker audit
For each marked point: **Removed (Pass) / Present (Fail)**
| Point | Type |
|-------|------|
| Yellow — exam room door handle | Pass/Fail dropdown |
| Yellow — light switch | Pass/Fail dropdown |
| Yellow — exam bed rail | Pass/Fail dropdown |
| Red — bathroom tap | Pass/Fail dropdown |
| Green — reception counter edge | Pass/Fail dropdown |
| Green — waiting room chair arm | Pass/Fail dropdown |
| Points passed (auto-count) | Number |
| Points checked | Number |

## ATP swab readings (RLU)
**Pass thresholds:** Yellow/clinical **< 250 RLU** · Red/Green/Blue **< 500 RLU**. (Confirm against your luminometer's guidance — see SOP.)
| Surface swabbed | RLU | Pass? |
|-----------------|-----|-------|
| Yellow — exam bed surface | Number | Pass/Fail |
| Yellow — clinical door handle | Number | Pass/Fail |
| Red — bathroom tap | Number | Pass/Fail |
| Green — reception counter | Number | Pass/Fail |
| Blue — kitchen bench | Number | Pass/Fail |

## Summary (dashboard reads these)
| Field | Type | Required |
|-------|------|----------|
| UV pass rate % | Number | ✔ |
| ATP swabs passed | Number | ✔ |
| ATP swabs taken | Number | ✔ |
| Highest RLU reading | Number | ✔ |
| Re-clean triggered? | Yes/No | ✔ |
| Verifier sign-off | Signature | ✔ |

---

### Dashboard mapping
- UV pass rate % → **KPI #3**.
- ATP passed ÷ taken → **KPI #4**; individual RLU values → the **ATP trend chart**.
- Any Fail (UV present or ATP over threshold) → immediate re-clean of that point + a corrective action.
- These readings are the headline numbers in the **monthly client compliance PDF** — objective, dated, defensible.
