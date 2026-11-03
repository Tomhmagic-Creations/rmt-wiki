---
description: "Publish numeric addon progress as a stat RMT can display and use in conditions."
---

# 🔌 Stats API

Publish numeric addon progress as a stat RMT can display and use in conditions.

**Endpoint:** `thm_rmt:api.stats`

Keep authoritative quest history in your addon or persistent metadata. This endpoint does not overwrite built-in or owner-created stats.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Register a stat](/api/stats/register) | `register` | Add your addon’s stat definition to RMT. |
| [Set a player’s stat](/api/stats/set) | `set` | Publish the player’s current authoritative total. |
| [Increment a player’s stat](/api/stats/increment) | `increment` | Add an amount to the current runtime total. |
| [Read a runtime stat value](/api/stats/get) | `get` | Read the value supplied for an online player. |
| [Clear one player’s value](/api/stats/remove-value) | `removeValue` | Remove a supplied value while keeping the stat definition. |
| [List your stat definitions](/api/stats/list) | `list` | Browse the stat definitions owned by your namespace. |
| [Remove a stat definition](/api/stats/unregister) | `unregister` | Remove your runtime stat and all its supplied values. |

## Example: publish a saved quest total

Register quests once per runtime, then set the player's authoritative saved total after join. Set or increment it when gameplay changes. Owners can use %thm_rmt:player_stat(my_addon:quests)% in supported displays.

Keep the permanent total separately; the published stat is a runtime view.

## Data lifetime

Definitions are runtime-only. Supplied player values also clear on leave/purge; republish on join.

## Field limits and options

64 definitions per namespace, 2,048 total; 1,024 player values per definition and 32,768 total. Values must be finite safe-range numbers. Player values require an online Player. Source values are unavailable after clearing, not guaranteed zero.
