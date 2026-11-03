---
description: "Check access, read a permission limit, or describe your addon’s permission nodes."
---

# 🔌 Permissions API

Check access, read a permission limit, or describe your addon’s permission nodes.

**Endpoint:** `thm_rmt:api.permissions`

Checking a permission does not grant it. Use an online check for live contexts; offline-ID checks cannot evaluate runtime contexts.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Check one permission](/api/permissions/has-permission) | `hasPermission` | Find out whether an online player may use a feature. |
| [Explain a permission decision](/api/permissions/get-permission) | `getPermission` | Read the allow/deny decision and its available matching details. |
| [Check a data permission](/api/permissions/has-data-permission) | `hasDataPermission` | Check access to a value-specific permission, such as a particular destination. |
| [Read a permission value](/api/permissions/get-data-permission) | `getDataPermission` | Read an assigned limit or string from an online player’s permissions. |
| [Check an offline player](/api/permissions/has-permission-from-i-d) | `hasPermissionFromID` | Check a normal node by registered player identity without requiring a live Player. |
| [Explain an offline decision](/api/permissions/get-permission-from-i-d) | `getPermissionFromID` | Read an offline-safe normal permission decision and matching details. |
| [List a player’s groups](/api/permissions/get-player-groups) | `getPlayerGroups` | Read direct group memberships plus the implicit Default group. |
| [Read the highest group](/api/permissions/get-group) | `getGroup` | Find the player’s highest resolved group summary. |
| [Check several permissions](/api/permissions/batch) | `batch` | Run up to 25 independent permission checks in one request. |
| [Describe addon permissions](/api/permissions/register-permissions) | `registerPermissions` | Add descriptions so realm owners can find your addon’s nodes in the permission editor. |

## Example: gate your quest menu

1. Register the namespace.
2. Use **Describe addon permissions** to expose my_addon:quests to the owner.
3. Have the owner grant that node through RMT.
4. On your menu action, use **Check one permission** and open only when result is true.

For a limit, use **Read a permission value** instead of a boolean check.

## Data lifetime

Permission descriptions are runtime-only. The owner’s saved groups and grants are separate and persist.
