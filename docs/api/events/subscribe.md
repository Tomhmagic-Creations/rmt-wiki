---
description: "Receive AFK transitions on a channel in your namespace."
---

# 🔌 Subscribe to RMT notifications

Receive AFK transitions on a channel in your namespace.

**Endpoint:** `thm_rmt:api.events`

**Action:** `subscribe`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `event` | String | A supported subscription event name. |
| `eventResponseId` | String | Your namespace’s channel for future notifications, not this request’s reply. |

## Example

```js
const reply = await request("events", {
  "action": "subscribe",
  "id": "afk_notifications",
  "event": "playerAFKChanged",
  "eventResponseId": "my_addon:rmt_events"
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object containing the namespaced subscription ID. Future notifications go to eventResponseId.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "subscribe",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "my_addon:afk_notifications"
  }
}
```

## Usage notes

Install your listener before subscribing. Optional playerId restricts this to one online player; that targeted subscription ends on departure. The reply channel must use your namespace.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)

## Receive a future notification

```js
system.afterEvents.scriptEventReceive.subscribe(event => {
  if (event.id !== "my_addon:rmt_events") return;
  let notice;
  try { notice = JSON.parse(event.message); } catch { return; }
  if (notice.event === "playerAFKChanged") {
    console.warn(JSON.stringify(notice.data));
  }
});
```

The notification shape is {subscriptionId,event,data}. The initial subscribe response and subsequent notifications are different messages. Install this listener before sending the subscribe request.
