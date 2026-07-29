# Jobber Setup Guide — Building the 3 Checklists (click-by-click)

Stand up the whole QC capture system in Jobber in ~30 minutes. This is the *how-to-click* companion to the three form specs in this folder. Field lists here are condensed — the full field detail lives in `jobber-form-1/2/3-*.md`.

> **Field types Jobber gives you:** Checkbox · Short text · Long text · Dropdown.
> **Not a checklist field:** photos and signatures. Handle those at the job level (Section E). Don't hunt for a "photo field" — it isn't in the checklist builder.
>
> Menu labels shift slightly by Jobber version. If a name here doesn't match exactly, use the **Search** (magnifying glass, top bar) and type "checklist".

---

## A. Find the checklist builder (once)

1. Top-right **gear / Settings** icon.
2. In the settings list, find **Checklists** (older accounts call it **Job Forms**). If you can't see it, search Settings for "checklist".
3. Click **New checklist** (or **Create checklist**).

> Alternative quick route: open any **Job** → scroll to the **Checklists** section → **Add checklist** → **Create new** — same builder, and it saves as a reusable template.

---

## B. Checklist 1 — Per-Visit Clean (the cleaner's list)

1. **New checklist** → Name it: `Per-Visit Clean — [attach per site]`.
2. Add items in order. For each: click **Add item**, pick the type, type the label.

Use **section headers** (a Short-text item typed in caps, or the "section"/heading option if your builder has one) to group by zone:

**— RED · Bathrooms —** (each = Checkbox)
- Toilets & urinals disinfected
- Basins, taps, mirrors cleaned
- Floors mopped — red equipment only
- Consumables restocked
- Clinical/sanitary waste emptied

**— YELLOW · Clinical —** (Checkbox)
- Exam beds wiped (TGA disinfectant)
- High-touch points wiped
- Sharps / clinical waste checked
- Floors — yellow equipment only
- Disinfectant contact time observed

**— GREEN · General —** (Checkbox)
- Reception & EFTPOS wiped
- Waiting room seating wiped
- Door hardware & switches wiped
- Bins emptied

**— BLUE · Kitchen —** (Checkbox)
- Benches & sink cleaned (food-safe)
- Appliance exteriors wiped

**— Consumables —** (Checkbox ×4 + one Short text)
- Soap / Paper towel / Sanitiser / Toilet paper topped up
- `Any consumable low/out — note here` (Short text)

**— Close-out —**
- `Anything not completed + why` (Long text)
- `Issues noticed — damage / hazards` (Long text)

3. If your plan shows a **Required** toggle per item, switch it on for the zone checkboxes — that forces completion.
4. **Save**.

---

## C. Checklist 2 — Weekly Supervisor Audit

**The supervisor only taps Pass / Fail / N/A. No percentages, no maths — the score is worked out automatically (Section H).**

1. **New checklist** → `Weekly Supervisor Audit`.
2. Add a **Dropdown** (`Pass` / `Fail` / `N/A`) for **each line item** — one dropdown per line, grouped under zone headers. Full item list is in `jobber-form-2-weekly-supervisor-audit.md`; the shape:

**— RED · Bathrooms —** (6 dropdowns: toilets, basins, floors, consumables, correct equipment, waste)
**— YELLOW · Clinical —** (7 dropdowns: exam beds, high-touch, dust-free, floors, sharps, no cross-zone gear, TGA disinfectant)
**— GREEN · General —** (5 dropdowns: reception, seating, door hardware, floors, bins)
**— BLUE · Kitchen —** (3 dropdowns: benches, appliances, bins)

> Tip: in Jobber you can **duplicate** a dropdown item, so build one Pass/Fail/N/A dropdown, then copy it down and rename — much faster than making each from scratch.

3. **Defects** — add a repeatable block (3–5 sets), one per Fail:
- `Defect — zone & location` (Short text)
- `Defect — issue` (Long text)
- `Defect — assigned to` (Short text)

4. **No summary/percentage fields.** Leave them out entirely — scoring is computed downstream (Section H). The supervisor's whole job is: rate items → log fails → sign off.
5. **Save**.

---

## D. Checklist 3 — Monthly Verification (UV + ATP)

**Raw readings only — tap UV Pass/Fail, type the RLU number. No percentages, no counting (Section H does the maths).**

1. **New checklist** → `Monthly Verification — UV + ATP`.
2. **UV marker audit** — one Dropdown (`Pass` / `Fail`) per marked point:
- Yellow — exam room door handle
- Yellow — light switch
- Yellow — exam bed rail
- Red — bathroom tap
- Green — reception counter edge
- Green — waiting room chair arm
3. **ATP readings** — for each surface, one **Short text** (number). Put the threshold in the label for reference; **don't** add a pass/fail field (it's computed from the number):
- `Yellow — exam bed surface — RLU (pass <250)`
- `Yellow — clinical door handle — RLU (pass <250)`
- `Red — bathroom tap — RLU (pass <500)`
- `Green — reception counter — RLU (pass <500)`
- `Blue — kitchen bench — RLU (pass <500)`
4. **No summary/percentage fields.** Leave them out — UV %, ATP passed/taken, highest RLU, and re-clean flag are all computed downstream (Section H).
5. **Save**.

---

## E. Photos, signature, scheduling (the job level)

Checklists capture the ticks; the job captures the rest.

- **Photos:** the cleaner opens the visit in the Jobber app → **Add photo** (camera). Jobber attaches them to that visit with a timestamp. Ask the team to shoot: each clinical room + each bathroom after cleaning.
- **Signature / sign-off:** use Jobber's **complete visit** step; on plans that support it, enable a completion signature. If not, the checklist's final checkbox + the submit timestamp is your sign-off.
- **Attendance / GPS:** turn on **Timesheets** (left menu) and, in Settings, the app's **GPS on clock-in** — that gives you the on-time KPI automatically.

**Attach + schedule the checklists:**
1. Create the recurring **Job** for a site.
2. In the job, **Add checklist** → pick `Per-Visit Clean` → this repeats on every visit.
3. Create a separate weekly **Job** (or visit) for the supervisor → attach `Weekly Supervisor Audit`.
4. Monthly job → attach `Monthly Verification`.

---

## F. Screenshots for the pitch

Once the three checklists exist, grab these for proposals (they make "compliance cleaning" real):
1. The **Per-Visit Clean** checklist open in the builder, zones visible.
2. The **Weekly Audit** with the Pass/Fail dropdowns.
3. The **Monthly UV + ATP** checklist.
4. A completed checklist on a job (once you run a test job on yourself — create a dummy job, tick it, take a photo).

Pair those with the `/portal/qc` dashboard demo → that's the full "here's what you actually get" story for the awaiting-response quotes.

---

## G. Quick test before you pitch

1. Create a **test client** ("Zenith Test Site") and a **test job**.
2. Attach `Per-Visit Clean`, open it in the Jobber **mobile app**, tick a few items, add a photo, complete.
3. Confirm it saved on the job. That's your screenshot #4 and proof the flow works end-to-end.

---

## H. Auto-scoring — nobody works out percentages

Jobber can't calculate inside a checklist, so the supervisor never types a score. The maths happens automatically after submission, two ways:

**1. Built-in (once the dashboard is live).** Ratings sync via the Jobber API and `/portal/qc` computes every zone % with `zoneScoreFromRatings()` in `src/lib/qc/kpis.ts`. Formula: `passes ÷ (passes + fails) × 100`, N/A excluded. Zero manual steps.

**2. Interim, no-code (before the dashboard's wired).** Set up once:
1. In **Zapier**, new Zap → trigger **Jobber → "Checklist/Job form submitted"**.
2. Action → **Google Sheets → Create row**, mapping each Pass/Fail/N/A answer to a column.
3. In the Sheet, a formula column per zone: `=COUNTIF(range,"Pass")/(COUNTIF(range,"Pass")+COUNTIF(range,"Fail"))`.
4. The score appears the instant a supervisor submits — no one touches a calculator.

**Trade-off:** the % won't show *inside Jobber* right after the audit; it lands on the dashboard or Sheet. If you ever need an instant on-site number, the Zapier→Sheet route gives it. For now (pre-first-client), you don't need it — screenshots and the flow matter more than live scores.
