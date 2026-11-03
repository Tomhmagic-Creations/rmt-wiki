---
description: "Read an offline-safe normal permission decision and matching details."
---

# 🔌 Explain an offline decision

Read an offline-safe normal permission decision and matching details.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `getPermissionFromID`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "getPermissionFromID",
  "playerId": "PLAYER_ID",
  "key": "my_addon:quests"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A normal permission-resolution object, including allowed.

## Usage notes

This is not an offline data-permission query. Runtime options are rejected.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
