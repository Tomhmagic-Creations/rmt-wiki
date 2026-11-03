---
description: "Combine permissions, playtime and group automation for a one-hour milestone."
---

# 📚 Award a Builder group

Combine permissions, playtime and group automation for a one-hour milestone.


**Uses:** [Groups](/admin/permissions), [Stats](/technical/stats), [Group automation](/technical/group-automation).

## 📌 1. Make the group

Create a group named Builder with the ID `builder` and priority 10. Add a prefix if desired:

```text
/thm_rmt:permgroupcreate builder Builder 10
/thm_rmt:permgroupnode builder add "thm_rmt:prefix=([Builder])" allow
```

Keep normal player permissions in Default. Add only the intended reward abilities to Builder.

## 📌 2. Create the milestone rule

Open **Admin > Permissions > Automation** and add a rule:

| Choice | Value |
| --- | --- |
| Trigger | Stat change for playtime |
| Condition type | Number |
| Placeholder | %thm_rmt:player_stat(playtime)% |
| Comparison | Greater than or equal to |
| Expected value | 3600 |
| Action | Add Group: builder |
| Once per player | Enabled |

Choose permanent membership for a permanent milestone. Save and enable through the editor.

## ✅ 3. Verify

Check an eligible player's automation status and membership when playtime next changes through the threshold. The value uses active seconds; AFK time does not count. Do not expect this rule to rebuild a historical playtime record or use a rolling one-hour window.

If no award occurs, inspect the condition type, stat ID, enabled state, prior once-per-player status and the author's required permissions. Recreating a rule with a new ID creates a separate award history.

**Adapt it:** select a custom zombie-kill stat instead of playtime. For a time-limited role tied to a specific gameplay event, use Technical Events and a temporary-group command instead.
