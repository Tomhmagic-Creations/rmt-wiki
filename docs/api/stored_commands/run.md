---
description: "Execute an owner-defined reward as an online player."
---

# 🔌 Run a saved sequence

Execute an owner-defined reward as an online player.

**Endpoint:** `thm_rmt:api.stored_commands`

**Action:** `run`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("stored_commands", {
  "action": "run",
  "id": "quest_reward",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The Stored Command runner’s success boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "run",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Alternatively send dimensionId and location, without playerId, for dimension execution. Never mix the two contexts. Inspect partial effects before retrying after false, error or timeout; there is no automatic rollback.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stored Commands actions →](/api/stored_commands)
