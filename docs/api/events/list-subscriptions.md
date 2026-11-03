---
description: "Find the supported RMT event names your addon can subscribe to."
---

# 🔌 List notification names

Find the supported RMT event names your addon can subscribe to.

**Endpoint:** `thm_rmt:api.events`

**Action:** `listSubscriptions`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

No action-specific inputs are required.

## Example

```js
const reply = await request("events", {
  "action": "listSubscriptions"
});
console.warn(JSON.stringify(reply.result));
```

## Result

An unpaginated array of supported event-name strings.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "listSubscriptions",
  "requestId": "my_addon-1",
  "success": true,
  "result": [
    "playerAFKChanged",
    "statValueChanged",
    "teamChanged",
    "claimChanged",
    "claimRulesChanged",
    "worldBorderChanged",
    "permissionsChanged",
    "playerGroupMembershipChanged",
    "spawnChanged",
    "waypointsChanged",
    "externalPlaceholderChanged"
  ]
}
```

## Usage notes

Do not use the list of Technical Event definitions as this notification catalogue.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
