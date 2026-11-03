---
description: "Publish custom event types or subscribe to supported RMT notifications."
---

# 🔌 Events API

Publish custom event types or subscribe to supported RMT notifications.

**Endpoint:** `thm_rmt:api.events`

Custom emissions are not the same as RMT notification subscriptions. Neither is a cancellable protection check.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Register a custom event](/api/events/register) | `register` | Make a new event type available in Technical > Events > When. |
| [Emit your custom event](/api/events/emit) | `emit` | Tell RMT that the registered event happened. |
| [List event definitions](/api/events/list) | `list` | Browse definitions available to the Technical Events system. |
| [Remove your event definition](/api/events/unregister) | `unregister` | Make your custom event type unavailable for this runtime. |
| [List notification names](/api/events/list-subscriptions) | `listSubscriptions` | Find the supported RMT event names your addon can subscribe to. |
| [Subscribe to RMT notifications](/api/events/subscribe) | `subscribe` | Receive AFK transitions on a channel in your namespace. |
| [Stop a subscription](/api/events/unsubscribe) | `unsubscribe` | Stop notifications for one local subscription ID. |

## Two separate workflows

**Publish your event:** register quest_completed, then emit it when gameplay completes. The owner chooses whether to attach Stored Commands through Technical > Events.

**Listen to RMT:** listSubscriptions, install a listener on your channel, then subscribe. Read future notifications there rather than on the ordinary request reply channel.

## Data lifetime

Definitions and subscriptions are runtime-only. Owner-authored Technical Event bindings are preserved.

## Field limits and options

64 definitions and 64 subscriptions per namespace, 2,048 each globally. Emissions and delivered notifications share a 100-per-namespace-per-tick budget; excess emissions reject and excess notifications drop. Notifications omit native entity objects and include playerId for player-related events.
