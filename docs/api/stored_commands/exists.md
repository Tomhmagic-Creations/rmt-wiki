---
description: "Check whether a named sequence currently exists."
---

# 🔌 Check a sequence ID

Check whether a named sequence currently exists.

**Endpoint:** `thm_rmt:api.stored_commands`

**Action:** `exists`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("stored_commands", {
  "action": "exists",
  "id": "quest_reward"
});
console.warn(JSON.stringify(reply.result));
```

## Result

A boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "exists",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

A true result confirms existence, not that every command is suitable for a given executor.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stored Commands actions →](/api/stored_commands)
