---
description: "Tell RMT that the registered event happened."
---

# 🔌 Emit your custom event

Tell RMT that the registered event happened.

**Endpoint:** `thm_rmt:api.events`

**Action:** `emit`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `data` | Object | Values matching the registered event fields. |

## Example

```js
const reply = await request("events", {
  "action": "emit",
  "id": "quest_completed",
  "playerId": "PLAYER_ID",
  "data": {
    "quest": "first_quest",
    "reward": 10
  }
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

null on accepted emission. It does not confirm that an owner’s bound commands completed.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "emit",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

Register the type first. Data fields must use its declared names and types; unknown fields reject. entity fields take loaded entity IDs. The owner must separately create an Event binding if they want a reaction.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
