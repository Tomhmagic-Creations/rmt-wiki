---
description: "Schedule useful messages and preview them before broadcasting."
---

# ⚙️ Announcements

Schedule useful messages and preview them before broadcasting.


1. Open **Admin > Announcements** and create an announcement.
2. Set its display name and add text lines.
3. Set the frequency in seconds and choose pooled or independent scheduling.
4. Preview the saved text, then enable the announcement when ready.

New announcements start paused. Blank or paused entries have no scheduled delivery. **Send Now** uses saved text and the normal audience filter even while scheduling is paused.

## 📌 Scheduling modes

| Mode | What happens |
| --- | --- |
| Shared pool | At each interval, one announcement at that frequency is selected; each gets a turn per shuffled cycle |
| Independent | This announcement sends every interval independently of the pool |

Timers restart with the world. Text edits preserve timing; changing frequency or mode updates the relevant schedule.

## 🔐 Personalised text and audiences

Use supported placeholders, such as `Welcome, %thm_rmt:player_name%!`. Scheduled placeholders resolve for each recipient.

To restrict delivery, enable **Only send to players with permission** and grant the exact `thm_rmt:announcement=(ANNOUNCEMENT_ID)` shown in the editor. Renaming the display name does not change that ID.

## 📌 Immediate broadcast

```text
/thm_rmt:announce "The event starts in five minutes!"
```

This sends to all online players across dimensions. It does not use the scheduled announcement's audience filter. Its player placeholders use the sender or stored-command context, rather than resolving separately for every recipient.
