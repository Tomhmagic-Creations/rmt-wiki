---
description: "Remove your definition and its supplied values."
---

# 🔌 Remove a placeholder

Remove your definition and its supplied values.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `unregister`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `key` | String | Your local placeholder key, without a namespace. |

## Example

```js
const reply = await request("placeholders", {
  "action": "unregister",
  "key": "balance"
});
console.warn(JSON.stringify(reply.result));
```

## Result

null when accepted.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "unregister",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

This removes only your namespaced placeholder, not owner-authored text that references it.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
