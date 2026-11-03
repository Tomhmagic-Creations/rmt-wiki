---
description: "Combine Stored Commands and Events to broadcast when a player goes AFK or returns."
---

# 📚 Announce AFK changes

Combine Stored Commands and Events to broadcast when a player goes AFK or returns.


**Uses:** [Stored Commands](/technical/stored-commands), [Events](/technical/events), [AFK](/settings/afk). You need trusted technical editing access and an active AFK policy.

## 📌 1. Save two messages

Create these Stored Commands through the editor. The text contains no leading slash.

| ID | Command |
| --- | --- |
| afk_enter | `thm_rmt:announce "%thm_rmt:event(player.name)% is now AFK"` |
| afk_exit | `thm_rmt:announce "%thm_rmt:event(player.name)% is back"` |

## 📌 2. Bind AFK entry

In Technical > Events, create a binding with:

| Field | Value |
| --- | --- |
| When | playerAFKChanged |
| Only If | isAFK = true, as a boolean |
| Run As | Dimension |
| Stored Commands | afk_enter |
| Cooldown | 0 for a message on each transition |

The captured event token reads the affected player without requiring a player executor. Set an explicit fallback dimension if the editor requests one. Enable and save the binding.

## 📌 3. Bind AFK exit

Create a second binding with the same event, **isAFK = false**, dimension execution and `afk_exit`. Save it enabled.

## ✅ 4. Check the result

Use a non-exempt player, wait for AFK entry, then change camera/input to return. Expect one message per transition. The event does not fire for every elapsed AFK update.

If nothing appears, check the boolean condition, saved enabled state, event Diagnostics and command text. Dimension execution avoids requiring ordinary players to have the broadcast command permission.

**Adapt it:** use the same transitions for another saved action. A binding cooldown is shared by all players using that binding, so a positive cooldown can suppress another player's nearby transition.
