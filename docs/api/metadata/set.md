---
description: "Store persistent quest progress for a registered player."
---

# 🔌 Save a metadata value

Store persistent quest progress for a registered player.

**Endpoint:** `thm_rmt:api.metadata`

**Action:** `set`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `scope` | String | world, player or entity. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | Local metadata key, without your namespace prefix. |
| `value` | Number | Value to store, publish or add; must match the action’s accepted type. |

## Example

```js
const reply = await request("metadata", {
  "action": "set",
  "scope": "player",
  "playerId": "PLAYER_ID",
  "key": "quest_progress",
  "value": 3
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

null after a successful write.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "set",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

Scopes: world (no target), player (registered online/offline playerId), entity (loaded non-player entityId). Values: text, finite number, boolean or {x,y,z}. Use remove for deletion, not null.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Metadata actions →](/api/metadata)
