---
description: "Track a gameplay total and make it available to profiles, displays and automation."
---

# 🛠️ Stats

Track a gameplay total and make it available to profiles, displays and automation.


1. Open **Technical > Stats** and create a definition with a stable ID.
2. Choose its source, name and optional filters.
3. Choose whether it is enabled and visible in Profile.
4. Save, perform a matching action and check **Profile > Stats**.

## 💡 Example: zombie kills

Create `zombie_kills` using **Entity kills**, filtered to `minecraft:zombie`. Then use `%thm_rmt:player_stat(zombie_kills)%` in a display, numeric condition or managed scoreboard.

| Source family | Examples |
| --- | --- |
| Combat | Entity kills, deaths, killed by entity, death cause |
| Building | Blocks placed or original blocks broken |
| Items | Item use, interaction with a block, completed item use |
| Scoreboard | Current or highest observed score in an objective |
| Playtime | Active seconds, excluding AFK |

Empty filters match everything. For supported entity filters, a matching type ID or family is sufficient. Different item events remain separate; choose the one that matches what you want to count.

## 🗑️ Editing and deletion

Changing a definition affects future tracking; it does not reconstruct past totals. Disabling preserves values and stops tracking. Hiding only removes it from the profile list.

Playtime cannot be edited, disabled, reset or deleted in stat management. Deleting another stat removes its definition and values, and its ID stays retired. References to a missing stat cannot safely be treated as zero.

External addon stats are read-only here and can disappear when the addon restarts or unregisters. Their owning addon supplies the values.
