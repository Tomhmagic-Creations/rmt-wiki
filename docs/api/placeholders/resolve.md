---
description: "Read the actual typed value of one expression."
---

# 🔌 Resolve one placeholder

Read the actual typed value of one expression.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `resolve`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | Complete placeholder expression, including its namespace and any arguments. |

## Example

```js
const reply = await request("placeholders", {
  "action": "resolve",
  "playerId": "PLAYER_ID",
  "key": "%thm_rmt:player_name%"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A string, number, boolean, vector or null if unavailable.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "resolve",
  "requestId": "my_addon-1",
  "success": true,
  "result": "ExamplePlayer"
}
```

## Usage notes

A player placeholder needs a real online playerId. For a numeric example, use %thm_rmt:player_stat(kills)%.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
