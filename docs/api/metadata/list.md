---
description: "List your namespace’s local keys in a scope."
---

# 🔌 List metadata keys

List your namespace’s local keys in a scope.

**Endpoint:** `thm_rmt:api.metadata`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `scope` | String | world, player or entity. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("metadata", {
  "action": "list",
  "scope": "player",
  "playerId": "PLAYER_ID",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A paginated list of local key strings.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "list",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "items": [
      "quest_progress"
    ],
    "total": 1,
    "offset": 0,
    "nextOffset": null
  }
}
```

## Usage notes

Use scope: world without a player ID to list your world keys.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Metadata actions →](/api/metadata)
