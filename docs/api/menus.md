---
description: "Add a button that opens your addon’s own interface from RMT."
---

# 🔌 Menus API

Add a button that opens your addon’s own interface from RMT.

**Endpoint:** `thm_rmt:api.menus`

RMT closes its form and notifies your channel on activation. Your addon is responsible for opening its own UI.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Register a menu button](/api/menus/register) | `register` | Add a Quests entry to the main menu. |
| [List your menu entries](/api/menus/list) | `list` | Read runtime button IDs belonging to your namespace. |
| [Remove a menu button](/api/menus/unregister) | `unregister` | Remove your runtime entry by its local ID. |

## Example: open your addon's UI

Subscribe to my_addon:open_quests before registering the button. On a menuActivated notification, find the online Player matching playerId, validate your feature access and open your own UI.

RMT already closes its current form before emitting this notification.

## Data lifetime

Menu entries and external Favourites are runtime/session resources, not persistent menu configuration.

## Field limits and options

32 entries per namespace and 512 total. Local menu IDs contain only lowercase letters, digits or underscores, at most 48 characters; full runtime IDs must fit 128. A maximum of eight permission gates is accepted. Label/category accept literal or translated text. Registration is not permission assignment.
