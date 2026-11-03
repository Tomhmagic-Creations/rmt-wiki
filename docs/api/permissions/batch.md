---
description: "Run up to 25 independent permission checks in one request."
---

# 🔌 Check several permissions

Run up to 25 independent permission checks in one request.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `batch`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `checks` | Array | Ordered independent permission checks. |

## Example

```js
const reply = await request("permissions", {
  "action": "batch",
  "playerId": "PLAYER_ID",
  "checks": [
    {
      "action": "hasPermission",
      "key": "my_addon:quests"
    },
    {
      "action": "getDataPermission",
      "key": "thm_rmt:homes.max"
    }
  ]
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An ordered array of per-check {success,result} or {success:false,error} objects.

## Usage notes

Inspect each entry. One invalid check does not fail the others. Allowed actions are hasPermission, getPermission, hasDataPermission, getDataPermission, hasPermissionFromID and getPermissionFromID. No nested batches or group queries. Each check may override the default playerId.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
