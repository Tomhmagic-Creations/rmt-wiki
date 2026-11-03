---
description: "Describe a numeric player balance your addon will supply."
---

# 🔌 Register a placeholder

Describe a numeric player balance your addon will supply.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `register`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `placeholders` | Array | New typed placeholder definitions. |

## Example

```js
const reply = await request("placeholders", {
  "action": "register",
  "placeholders": [
    {
      "key": "balance",
      "description": "Current account balance.",
      "type": "number",
      "scope": "player"
    }
  ]
});
console.warn(JSON.stringify(reply.result));
```

## Result

null after successful definition registration.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "register",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

Types: string, number, boolean, vector2, vector3. Scope: world or player. A batch has 1–25 definitions. arguments defaults 0, maximum 8. Optional examples (1–5) must match the key/argument count; privacy can be coordinates or playerId. Register once per runtime; duplicate keys reject.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
