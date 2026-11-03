---
description: "Read a single placeholder as a Minecraft RawMessage."
---

# 🔌 Resolve one value as raw text

Read a single placeholder as a Minecraft RawMessage.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `resolveRawText`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | Complete placeholder expression, including its namespace and any arguments. |

## Example

```js
const reply = await request("placeholders", {
  "action": "resolveRawText",
  "playerId": "PLAYER_ID",
  "key": "%thm_rmt:player_name%"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A RawMessage or null.

## Usage notes

Use for native text APIs when you want translation/text structure preserved instead of forcing an English string.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
