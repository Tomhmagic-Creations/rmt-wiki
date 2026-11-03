---
description: "Delete one key without touching unrelated keys."
---

# 🔌 Remove a metadata value

Delete one key without touching unrelated keys.

**Endpoint:** `thm_rmt:api.metadata`

**Action:** `remove`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `scope` | String | world, player or entity. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | Local metadata key, without your namespace prefix. |

## Example

```js
const reply = await request("metadata", {
  "action": "remove",
  "scope": "player",
  "playerId": "PLAYER_ID",
  "key": "quest_progress"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The storage manager’s removal result.

## Usage notes

Removing the definition of a runtime stat or placeholder does not delete this persistent metadata.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Metadata actions →](/api/metadata)
