---
description: "Read direct group memberships plus the implicit Default group."
---

# 🔌 List a player’s groups

Read direct group memberships plus the implicit Default group.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `getPlayerGroups`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("permissions", {
  "action": "getPlayerGroups",
  "playerId": "PLAYER_ID",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A paginated result whose items are group-ID strings.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "getPlayerGroups",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "items": [
      "default",
      "vip"
    ],
    "total": 2,
    "offset": 0,
    "nextOffset": null
  }
}
```

## Usage notes

This is not a flattened list of inherited parent groups. Use nextOffset for more pages.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
