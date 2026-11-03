---
description: "Read border geometry and check a player’s contextual border policy."
---

# 🔌 World Borders API

Read border geometry and check a player’s contextual border policy.

**Endpoint:** `thm_rmt:api.world_borders`

Size is measured in chunks and saved centres are chunk coordinates. Returned bounds describe block coordinates.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [List configured borders](/api/world_borders/list) | `list` | Browse dimensions and their saved border settings. |
| [Read one border](/api/world_borders/get) | `get` | Read a dimension’s settings and calculated block bounds. |
| [Check border geometry](/api/world_borders/contains) | `contains` | Test whether a block position is inside the allowed border. |
| [Check a player’s bypass](/api/world_borders/bypasses) | `bypasses` | Evaluate border-bypass access for an online player at a location. |
| [Check border action access](/api/world_borders/allows-action) | `allowsAction` | Check the player’s border policy for a particular location. |

## Example: choose a destination

Use contains to test geometry. If player policy matters, use allowsAction with the real online player's ID and intended destination. Neither query finds safe terrain or performs a teleport.

## Data lifetime

Read-only. The API cannot change borders or teleport players.
