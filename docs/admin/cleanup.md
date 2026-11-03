---
description: "Understand the impact of deleting RMT player data before using maintenance controls."
---

# ⚙️ Player cleanup and retention

Understand the impact of deleting RMT player data before using maintenance controls.


Player purge is an administrative cleanup of RMT-owned player records. Use the permitted player-management controls for a selected player, or review the inactivity-purge policy under **Admin > Settings > Moderation**.

## 📌 Before confirming cleanup

1. Confirm the exact player identity and whether the request is manual or inactivity-based.
2. Review the affected personal and owned features.
3. Distinguish deleting personal records from deleting shared realm configuration.
4. Read the confirmation and any pending/recovery status. Do not repeatedly start cleanup because it is still processing.

Personal records can include settings, homes, statistics, memberships and owned feature data according to the feature's cleanup policy. References in shared features are treated according to their actual role, not merely because a string happens to contain a player ID.

## 📌 What cleanup is not

It is not a world rollback, terrain reset or a general deletion of native Minecraft items. Shared realm settings, command sequences, event bindings and other players' records are not simply removed with the person who edited them.

Action Log uses its own retention. Ban and replay-protection records can have deliberate retention rules, so deleting player data must not be assumed to clear a punishment or make a purchase/reward safe to repeat.

Cleanup may be staged and retry after interrupted writes. Resolve pending status through the supported feature controls. Do not delete internal storage or migration markers to force completion.
