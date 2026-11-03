---
description: "Check a normal node by registered player identity without requiring a live Player."
---

# 🔌 Check an offline player

Check a normal node by registered player identity without requiring a live Player.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `hasPermissionFromID`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "hasPermissionFromID",
  "playerId": "PLAYER_ID",
  "key": "my_addon:quests"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A boolean allow/deny result.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "hasPermissionFromID",
  "requestId": "my_addon-1",
  "success": true,
  "result": false
}
```

## Usage notes

Do not send options. Contextual assignments cannot match without the live player/target information.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
