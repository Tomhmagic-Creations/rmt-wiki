---
description: "Read dynamic values or publish typed values other RMT features can use."
---

# 🔌 Placeholders API

Read dynamic values or publish typed values other RMT features can use.

**Endpoint:** `thm_rmt:api.placeholders`

Use a complete %namespace:key% expression for resolution. Definition/value writes use local keys.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Find placeholders](/api/placeholders/list) | `list` | Search the registered placeholder catalogue. |
| [Resolve one placeholder](/api/placeholders/resolve) | `resolve` | Read the actual typed value of one expression. |
| [Resolve text](/api/placeholders/resolve-text) | `resolveText` | Replace embedded placeholders in a text template. |
| [Resolve one value as raw text](/api/placeholders/resolve-raw-text) | `resolveRawText` | Read a single placeholder as a Minecraft RawMessage. |
| [Resolve a raw-text template](/api/placeholders/resolve-text-raw-text) | `resolveTextRawText` | Resolve a template while preserving Minecraft raw-text structure. |
| [Register a placeholder](/api/placeholders/register) | `register` | Describe a numeric player balance your addon will supply. |
| [Publish placeholder values](/api/placeholders/set-values) | `setValues` | Set the registered balance for an online player. |
| [Remove a placeholder](/api/placeholders/unregister) | `unregister` | Remove your definition and its supplied values. |

## Example: expose a balance

Register balance as a numeric player placeholder, then setValues after join and whenever the balance changes. Realm owners can use %my_addon:balance% in supported text, scoreboards and numeric conditions.

## Example: a value with arguments

Register quest_done with type boolean, scope player and arguments:1. Publish {key:"quest_done",args:["first_quest"],value:true,ttlTicks:1200}. Resolve %my_addon:quest_done(first_quest)% using the same player context.

## Data lifetime

External definitions/values are runtime-only. Player values clear on leave; world values may also expire by TTL.

## Field limits and options

64 definitions per namespace, 2,048 total; 8,192 values per namespace and 32,768 total. Value batches have 1–25 entries. Strings are at most 4,096 characters, argument strings at most 128. ttlTicks is 1–1,728,000. Player-scope writes need playerId; world-scope writes omit it. Resolution can also supply dimensionId/location (location requires dimensionId) and real target subjects (target requires playerId).
