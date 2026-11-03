---
description: "Find the player’s highest resolved group summary."
---

# 🔌 Read the highest group

Find the player’s highest resolved group summary.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `getGroup`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("permissions", {
  "action": "getGroup",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object with groupId, name and priority, or null when there is no resolved group.

## Usage notes

The result does not expose the group’s node list or the full internal group record.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
