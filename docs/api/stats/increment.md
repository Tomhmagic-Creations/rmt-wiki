---
description: "Add an amount to the current runtime total."
---

# 🔌 Increment a player’s stat

Add an amount to the current runtime total.

**Endpoint:** `thm_rmt:api.stats`

**Action:** `increment`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `value` | Number | Value to store, publish or add; must match the action’s accepted type. |

## Example

```js
const reply = await request("stats", {
  "action": "increment",
  "id": "quests",
  "playerId": "PLAYER_ID",
  "value": 1
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The updated numeric value.

## Usage notes

An absent runtime total starts from zero for incrementing. This does not provide persistent quest history or replay protection.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stats actions →](/api/stats)
