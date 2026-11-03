---
description: "Resolve a template while preserving Minecraft raw-text structure."
---

# 🔌 Resolve a raw-text template

Resolve a template while preserving Minecraft raw-text structure.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `resolveTextRawText`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `text` | String | Text template or display lines, as shown. |

## Example

```js
const reply = await request("placeholders", {
  "action": "resolveTextRawText",
  "playerId": "PLAYER_ID",
  "text": "Hello %thm_rmt:player_name%!"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A resolved RawMessage suitable for a native text consumer.

## Usage notes

This differs from resolveText, which returns a string.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
