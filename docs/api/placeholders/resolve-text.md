---
description: "Replace embedded placeholders in a text template."
---

# 🔌 Resolve text

Replace embedded placeholders in a text template.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `resolveText`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `text` | String | Text template or display lines, as shown. |

## Example

```js
const reply = await request("placeholders", {
  "action": "resolveText",
  "playerId": "PLAYER_ID",
  "text": "Hello %thm_rmt:player_name%!"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The resolved text string.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "resolveText",
  "requestId": "my_addon-1",
  "success": true,
  "result": "Hello ExamplePlayer!"
}
```

## Usage notes

Unresolved text tokens can remain visible. This is not arbitrary JavaScript evaluation.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
