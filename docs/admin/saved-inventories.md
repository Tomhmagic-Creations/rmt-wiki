---
description: "Choose whether eligible logout inventories can be inspected and edited while players are offline."
---

# ⚙️ Saved inventories setup

Choose whether eligible logout inventories can be inspected and edited while players are offline.


## 📌 Enable offline snapshots

Open **Admin > Settings > Moderation > Saved Inventories**. This starts off. When enabled, eligible players' inventories are captured as they leave. A player without a valid snapshot is unavailable, not an empty inventory.

Native Minecraft operators are always excluded, even when using FakeNoOP. The optional saved-inventory bypass also excludes a player.

Offline edits apply only to the edited sections when the player returns. An unchanged snapshot does not replace their normal Minecraft inventory. If a view becomes stale because the target joins/leaves or the saved revision changes, reopen it.

Interrupted restoration can require staff recovery. Inspect the available status instead of repeatedly copying or issuing items; a saved snapshot is not a general inventory-backup history.


## 📌 Enable and verify

1. Enable Saved Inventories in **Settings > Moderation**.
2. Have a non-operator test player leave normally with a known set of items.
3. Open Invsee for that offline account and confirm the recorded sections.
4. Make a small authorised offline edit, then have the player join and check the edited section.

Main inventory, hotbar/equipment and Ender Chest are separate saved parts. Only edited parts are applied on rejoin. Native operators are always excluded, including when using FakeNoOP. This feature is not a general history of every past inventory.

## ❓ Interrupted restoration

An unedited logout snapshot does not replace live Minecraft items. Recovery state can prevent unsafe repeated application after interruption. Inspect the status and existing items before retrying or compensating a player; repeatedly issuing copies can duplicate a reward.
