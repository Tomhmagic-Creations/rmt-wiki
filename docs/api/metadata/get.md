---
description: "Read your namespace’s stored progress for a player."
---

# 🔌 Read a metadata value

Read your namespace’s stored progress for a player.

**Endpoint:** `thm_rmt:api.metadata`

**Action:** `get`

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
  "action": "get",
  "scope": "player",
  "playerId": "PLAYER_ID",
  "key": "quest_progress"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The saved value or null if missing.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "get",
  "requestId": "my_addon-1",
  "success": true,
  "result": 3
}
```

## Usage notes

A value of 0 or false is valid and differs from null. Key is quest_progress, not my_addon:quest_progress.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Metadata actions →](/api/metadata)
