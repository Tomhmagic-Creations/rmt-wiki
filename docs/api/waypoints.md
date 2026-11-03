---
description: "Add navigation markers for everyone, a team or selected online players."
---

# 🔌 Waypoints API

Add navigation markers for everyone, a team or selected online players.

**Endpoint:** `thm_rmt:api.waypoints`

Markers guide navigation; they do not teleport players. RMT viewing access, distance, dimension, display capacity and Streamer Mode still apply.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Create or replace a waypoint](/api/waypoints/register) | `register` | Publish a quest destination marker for one online player. |
| [List your waypoints](/api/waypoints/list) | `list` | Read marker definitions belonging to your namespace. |
| [Remove a waypoint](/api/waypoints/remove) | `remove` | Delete one marker by its local ID. |

## Example: a quest destination

Register a player-targeted marker after that player joins. Re-register its local ID with the updated destination when the quest changes, then remove it when complete.

Use a separate marker ID per simultaneous destination/player when they need independent positions.

## Data lifetime

Runtime-only. Recreate definitions after restart. External hidden/pinned preferences are session-only.

## Field limits and options

128 markers per namespace, 2,048 total. Icons: circle, cross, cube, flag, plus, point, square. RGB channels are whole 0–255. enabled defaults true; minDistance/maxDistance default 0 (max 0 is unlimited). priority defaults 0, range −1,000 to 1,000. playerIds accepts 1–64 online players. An empty targeted audience after departure removes the marker.
