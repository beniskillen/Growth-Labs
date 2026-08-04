# 02 — Inbox Triage Loop (WhatsApp + Telegram + Instagram → Growth CRM)

**One-line:** Every recent inbound DM across WhatsApp, Telegram and Instagram lands in the Growth
CRM with the right contact, the loop drafts the reply Ben would actually send, and any contact the
CRM knows nothing about gets researched — so no warm conversation dies in a notification tray.

**Executors:** `[AGENT]` = you. `[BEN]` = Ben (send button, judgment, replies, logins).
**KPI:** zero recent inbound conversations un-triaged; every drafted reply sendable verbatim.
**Runs where:** the Cursor **desktop** agent — it needs (a) the local connector bundle on disk and
(b) Ben's logged-in browser for Instagram. A cloud automation cannot do this run (no browser, no
local sessions). See `automations/04-inbox-triage.md` for how the pieces are scheduled.

This is the **inbound sibling** of `01-bd-outreach-loop.md`. Same doctrine, same voice, same gates —
that loop sweeps the CRM outward; this one sweeps the messaging inbox inward. All Standing Rules and
the AGENT BRIEFING of spec 01 apply here unchanged; this file only adds what is inbound-specific.

---

## INPUTS

**1. The connector bundle (local file).** `inbox-connectors/out/bundle-latest.json`, produced by
`inbox-connectors/run.py` (Telegram via Telethon; WhatsApp via the neonize listener's store). Shape:

```
{ "generated_at", "since", "counts", "total_threads",
  "threads": [ { "platform", "thread_id", "contact_name", "username", "phone",
                 "last_message_text", "last_message_ts", "last_message_direction",
                 "unread", "unread_count",
                 "messages": [ { "ts", "direction" (in|out), "sender", "text" } ] } ] }
```

If the file is missing or its `generated_at` is not from today, **flag it** and tell Ben to run the
pull (`cd inbox-connectors && python run.py`) — do not triage a stale bundle silently.

**2. Instagram — read live through Ben's browser.** Instagram has no safe local API, so DMs are read
from Ben's already-logged-in session using the browser tools (procedure in THE FLOW, Stage 0b). Read
only. If Instagram is not logged in, flag it and continue with the other two platforms.

**3. The Growth CRM (Notion database).** Data source `collection://8961461a-20f0-4cd1-bce1-406c0064d6ae`.
Read for matching; write per the field map below (Stage 5, after the gate).

**4. Ben-Brain context.** Re-read `context/operating-brain/01-current-focus.md`,
`02-active-vs-ceased-work.md`, the `08-style-guide.md`, and `context/voice-examples/` every run.
Never draft in Ben's name without them.

> Field names below must match the real Notion property names exactly. A mismatch or a missing
> select option is a data/spec defect — flag it (FAILURE RULES), never guess a substitute value.

---

## THE FLOW

**Stage 0a — Ingest the bundle.** `[AGENT]`
Read `bundle-latest.json`. Keep only threads whose `last_message_direction` is `in` OR that are
`unread` (a thread where Ben spoke last and got no reply is not an inbound to triage — park it).
→ *Gate: freshness confirmed (generated today); inbound threads enumerated per platform.*

**Stage 0b — Read Instagram DMs (browser).** `[AGENT]`
1. `browser_tabs` (list) → if no tab, `browser_navigate` to `https://www.instagram.com/direct/inbox/`.
2. `browser_lock` (lock) before interacting; `browser_snapshot` to read the thread list.
3. For each thread with a recent inbound (within the bundle's `since` window), open it, snapshot,
   and capture: display name, @handle, the last few messages with direction. **Read only — never
   type, click send, or react.**
4. `browser_lock` (unlock) when done. Normalise each into the same thread shape as the bundle
   (`platform: "instagram"`, `username` = @handle).
→ *Gate: Instagram inbound threads captured, or a clear "IG not logged in / unavailable" flag.*

**Stage 1 — Match to the CRM.** `[AGENT]`
For every inbound thread, find its CRM row (read the CRM; do not write yet):
- **WhatsApp / Telegram:** match `phone` (E.164) against CRM **Phone**. Then Telegram `username`
  and `contact_name` against **Name** / **Context / Notes**.
- **Instagram:** match `@handle` or display name against **Name** / **Context / Notes** / **URL**.
- **Confidence:** exact phone = confident. Name-only = tentative (flag for Ben to confirm before
  any write). No plausible match = **new contact**.
→ *Gate: every thread is tagged matched (with page) / tentative / new — nothing unclassified.*

**Stage 2 — Enrich & research.** `[AGENT]`
For **new** contacts and matched contacts whose **Context / Notes** is thin/empty: research to fill
gaps — name + any handle/company/role, LinkedIn, public bio, location. Prefer web search; for a
matched contact also read its existing CRM page. Produce proposed values for **Company / Org**,
**Role / Title**, **Location**, **LinkedIn**, **Category**, **Avatar Fit**, and a 1–2 line
**Context / Notes**. Everything researched is a *proposal* until the gate. **Never fabricate** — an
unfound field stays a `[CONFIRM: …]` placeholder, never a plausible guess.
→ *Gate: every new/thin contact has either researched context or an explicit "no public info found".*

**Stage 3 — Classify & best-action.** `[AGENT]`
Apply spec 01's operating doctrine (one funnel → audit; avatar filter; communities are channels).
Classify each contact audit-path / partner-channel / park, with a one-line "why now" grounded in
what they actually said. **Do Not Contact = absolute stop, no draft.**
→ *Gate: every thread carries a classification and a why-now.*

**Stage 4 — Draft the reply.** `[AGENT]`
One channel-native reply per thread that answers what they actually sent, in Ben's voice, on a
cadence matching the relationship's warmth (spec 01 §5 matrix + congruence rules). WhatsApp/Telegram/
Instagram = short, casual, lowercase-friendly, one idea. An alternate angle only where the read is
genuinely ambiguous. Propose **Next Action** + **Next Contact** so the thread always has a forward move.
→ *Gate: every draft passes the read-aloud test — Ben could paste it verbatim.*

**Stage 5 — Run sheet & handoff.** `[AGENT]`
Assemble the Inbox Triage run sheet (see OUTPUT). Present it.

### ⟡ REVIEW GATE — Ben approves before anything moves
`[BEN]` reviews, edits, and fires the replies himself from each app. **Produce the full run sheet,
then STOP and WAIT.** Do not write to the CRM, do not create pages, do not mark anything sent, and
never send a message on any platform — however obvious the approval seems.

**Stage 6 — Write-back & log.** `[AGENT]` *(only after the gate clears)*
For the contacts Ben confirms:
- **New contact** → create a CRM page with the field map below (Status **To Review**).
- **Existing** → update: append to **Context / Notes**, set **Last Synced** = today, set
  **Suggested Communication** = approved draft, set **Next Action** / **Next Contact**, and
  **Status** = **In Conversation** if it is now a live thread.
Then append the run to the loop log (contacts due/actioned/deferred; drafts approved/edited/rejected).
→ *Gate: CRM reflects only what Ben confirmed; the log line is written.*

---

## CRM FIELD MAP (writes)

| CRM property | Value on write |
|---|---|
| **Name** (title) | Best real name; fall back to `@handle` only if no name is known |
| **Phone** | E.164 from the thread (WhatsApp/Telegram) |
| **Email** | Only if researched/confirmed — else leave empty |
| **Primary Contact Channel** | `WhatsApp` or `Telegram` where the option exists. **Instagram has no option — flag it** (see below); leave empty, don't guess |
| **Source** | `Telegram` for Telegram. **WhatsApp / Instagram are not Source options — flag it**; leave empty rather than mis-tag |
| **Status** | New inbound → `To Review`; live back-and-forth → `In Conversation` |
| **Context / Notes** | Append: `[<platform> <date>] <one-line summary of what they said>` — never overwrite existing notes |
| **Last Synced** | Today (date) |
| **Suggested Communication** | The approved draft reply |
| **Next Action** / **Next Contact** | Proposed forward move + date (spec 01 cadence matrix) |
| **Category / Avatar Fit / Opportunity Type / Relevance Score / Activation Priority** | Proposed from research for new contacts; leave existing values unless research clearly updates them |

**Known schema gaps to flag (one-time fix, don't silently work around):** `Primary Contact Channel`
has no **Instagram** option; `Source` has no **WhatsApp** or **Instagram** option. Until Ben adds
them, leave those fields empty for affected contacts and list the gap in the run sheet's Flags.

---

## OUTPUT — the Inbox Triage run sheet

1. **The number** — inbound threads triaged today, by platform; how many are new to the CRM.
2. **Ready to reply** — table: contact · platform · matched/tentative/**NEW** · what they said (1 line) ·
   classification + why now · draft reply · proposed Next Action + Next Contact.
3. **New contacts to create** — proposed CRM fields per new contact (researched values marked, gaps as
   `[CONFIRM: …]`).
4. **Judgment calls** — tentative matches to confirm; anything emotionally loaded, negotiation, or a
   live reply → routed to Ben untouched.
5. **Flags** — stale/missing bundle, Instagram not logged in, schema gaps (channel/source options),
   Do Not Contact anomalies, no-public-info contacts.
6. **Log line** — threads triaged / matched / new / deferred; drafts approved vs edited vs rejected.

---

## FAILURE RULES

- **Bundle missing or not from today** → flag, ask Ben to run `python run.py`; do not triage stale data.
- **WhatsApp bundle empty** → likely the listener isn't running; flag it (start `whatsapp_listener.py`),
  continue with Telegram + Instagram.
- **Instagram not logged in / browser blocked** → flag and continue; never attempt a login yourself.
- **Tentative (name-only) match** → never write to that page until Ben confirms it's the right person.
- **Missing field or missing select option** → flag as a data/spec defect; leave empty, don't guess.
- **No public info on a contact** → record "no public info found"; never fabricate a bio, company or role.
- **Emotionally loaded / negotiation / a live reply mid-conversation** → route to Ben untouched.
- **Blocked or unsure** → stop, state what you have and what's missing, flag Ben.

---

## GUARDRAILS

- **The agent never sends anything, on any platform.** Drafts only; Instagram browser access is
  read-only. The send button is Ben's.
- **Read-only until the gate.** No CRM page is created or edited, and nothing is marked sent, until
  Ben confirms in Stage 6.
- Do Not Contact is absolute. Never pitch outside the one-item menu; never expose pricing in a first reply.
- Never fabricate shared history, bios, or contact details — gaps get flagged, not filled.
- All contact data stays inside this workspace; drafts contain nothing Ben wouldn't be comfortable
  being screenshotted.
- A loop without a log is a cron job with vibes — every run writes its log line.

## GRADUATION (trust ladder)

Stays manual + fully gated until **10 consecutive runs with ≥80% of drafts approved unedited**. Only
then consider auto-creating clearly-new contacts (still draft-only for replies). Anything emotionally
loaded or negotiation-adjacent never graduates past draft-only.
