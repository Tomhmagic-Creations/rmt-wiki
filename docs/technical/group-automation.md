---
description: "Award groups or run configured actions when a player meets a milestone."
---

# 🛠️ Group automation

Award groups or run configured actions when a player meets a milestone.


**Find it:** Admin > Permissions > Automation. This is separate from Technical Events.

## 📌 Set up a milestone

1. Create the group you want to award.
2. Add an automation rule and select a trigger: join, a selected stat change or scoreboard changes.
3. Add a player-placeholder condition with a type, comparison and expected value.
4. Choose an **Add Group** action and the intended group.
5. Set once-per-player behaviour and cooldown as appropriate, then save/enable using the editor controls.
6. Test with a non-operator and inspect that player's execution status.

For a playtime award, use `%thm_rmt:player_stat(playtime)% >= 3600` for one hour of eligible playtime. Playtime values use seconds.

## 📌 Conditions and repeated awards

Choose **All** when every condition must match. Choose **At least one** when any condition is sufficient. Missing or incorrectly typed values do not match. These rules have a player subject, not arbitrary event blocks or items.

Temporary group awards expire in real time, including offline time. Repeating a temporary grant refreshes its expiry; it does not stack duration. Keep the same rule identity when preserving its once-per-player history.

Stored-command actions require the extra automation-command authorisation. The author's required unconditional permissions are rechecked for unattended execution; revoking them can stop an existing rule.

For gameplay events with specific participants, use [Events](/technical/events). See [Award a Builder group](/tutorials/builder-award) for a complete milestone example.
