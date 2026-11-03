---
description: "Set the registered balance for an online player."
---

# 🔌 Publish placeholder values

Set the registered balance for an online player.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `setValues`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `values` | Array | Typed values to publish; keys must already be registered. |

## Example

```js
const reply = await request("placeholders", {
  "action": "setValues",
  "playerId": "PLAYER_ID",
  "values": [
    {
      "key": "balance",
      "value": 250
    }
  ]
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

null after successful publication.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "setValues",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

For world scope omit playerId. A value’s type must match registration. Use args for argument-bearing definitions, ttlTicks for expiry, or value:null to clear one supplied value. The value does not become permanent balance storage.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
