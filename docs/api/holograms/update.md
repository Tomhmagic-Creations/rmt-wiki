---
description: "Change exactly one part of an existing display."
---

# 🔌 Update a hologram

Change exactly one part of an existing display.

**Endpoint:** `thm_rmt:api.holograms`

**Action:** `update`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `text` | Array | Text template or display lines, as shown. |

## Example

```js
const reply = await request("holograms", {
  "action": "update",
  "id": "quest_board",
  "text": [
    "Quest Board",
    "A new adventure is available!"
  ]
});
console.warn(JSON.stringify(reply.result));
```

## Result

The update manager’s result; false if the display does not exist.

## Usage notes

Send exactly one of text, options, or location plus dimensionId. Use separate requests for separate operations. The owner cannot be changed through this endpoint.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Holograms actions →](/api/holograms)

## Example: change size

```js
await request("holograms", {
  action: "update", id: "quest_board", options: { scale: 1.5 }
});
```

## Example: move the display

```js
await request("holograms", {
  action: "update", id: "quest_board",
  dimensionId: "minecraft:overworld", location: { x: 20.5, y: 72, z: 30.5 }
});
```

Each example is a separate operation. Do not combine text, options and movement into one request.
