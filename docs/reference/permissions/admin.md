---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Administration permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:admin.store.view

**View Realm Store Setup**

Inspect the store page, categories and products in Admin. Main tokens are never displayed.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.store.edit

**Edit Realm Store**

Configure the store page, categories, products and stored-command rewards. Token payment changes additionally require real Minecraft operator status, which permissions cannot grant.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.store.history

**View Store Transactions**

Inspect store payment and reward-dispatch history. Deleting entries also requires Edit Realm Store. Spent redemption IDs remain blocked after deletion.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.action_log.configure

**Configure Action Log**

Configure action logging, storage limits and global or per-action retention under Admin Settings.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.view

**View Crate Management**

Browse realm crates and their block assignments.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.create

**Create Crates**

Create crates with custom loot and stored-command rewards. Trusted administrators only.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.edit

**Edit Crates**

Edit crate rewards, costs, cooldowns, claim limits and holograms. Can configure powerful command rewards.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.delete

**Delete Crates**

Delete unassigned crates. Retired IDs cannot be reused.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.assign

**Assign Crate Blocks**

Assign or unassign loaded blocks and remove saved assignments.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.crates.give

**Give Crate Keys**

Generate authenticated crate keys for selected players.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.view

**View Kit Management**

Inspect kit settings and open kit administration.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.create

**Create Kits**

Save a new kit from your inventory, hotbar and equipment, excluding the duplicate main hand.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.edit

**Edit Kits**

Edit kit settings, replace template items, and load templates into an empty inventory.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.delete

**Delete Kits**

Permanently delete kit templates and redemption histories. Deleted kit IDs cannot be reused.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.give

**Give Kits**

Give kit items to online players without consuming their claim limits or cooldown. Inventory handling rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.kits.review

**Review Kit Deliveries**

Resolve interrupted kit deliveries after inspecting their effects. This never replays item delivery.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.waypoints

**Manage Realm Waypoints**

Create, edit and delete realm-owned waypoints and enable or disable the built-in normal-spawn marker.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.worldborder

**Manage World Borders**

Configure chunk-aligned world borders separately for each loaded dimension.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.teams

**Manage All Teams**

Edit any team, its members, admins, owner, invitations, settings and home, or delete it.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.view

**View Nameplate Editor**

Browse shared nameplate presets in the admin menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.create

**Create Nameplates**

Create shared nameplate presets. Requires editor access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.edit

**Edit Nameplates**

Edit shared nameplate text and styling. Requires editor access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.delete

**Delete Nameplates**

Delete shared presets except the built-in default. Requires editor access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.settings

**Configure Nameplates**

Choose vanilla/custom rendering and the realm default preset. Requires editor access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.nameplates.preview

**Preview Nameplates**

Privately preview a draft nameplate for 15 seconds. Requires editor access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.view

**View Permissions**

Browse known permission nodes and their usage.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.groups

**Manage Groups**

Create, edit and delete permission groups. This can grant full realm access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.assign

**Assign Groups**

Change group memberships for online and offline players. This can grant administrative access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.players

**Personal Permissions**

Edit personal permission nodes for online and offline players.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.automation

**Manage Automatic Assignments**

Create and edit event-driven group assignments.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.permissions.automation.commands

**Automated Commands**

Authorize stored commands in automation. Requires automation management too.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.ban_bypass

**Bypass Ban Restrictions**

Allows the player to bypass being banned. Only use to prevent Admins accidentally banning themselves.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_menu

**Manage Menu**

Allows the player to access and manage the main menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_players

**Manage Players**

Allows the player to open the admin manage players menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_players.heal

**Heal Players**

Allows the player to heal another player from the admin manage players menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_players.feed

**Feed Players**

Allows the player to feed another player from the admin manage players menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_players.gamemode

**Change Player Gamemode**

Allows the player to change another player's gamemode from the admin manage players menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn

**Manage Spawn**

Allows the player to open the admin manage spawn menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn.default

**Set Default Spawn**

Allows the player to set the vanilla world spawn location.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn.structures

**Place Spawn Dimension Builds**

Place or replace bundled builds in the spawn dimension, including moving its occupants to the new safe spawn. Requires Manage Spawn. Does not change realm spawn settings.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn.visit

**Visit Spawn Dimension Build**

Visit the prepared spawn dimension build and return to the previous location. Requires Manage Spawn and dimension entry access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn.custom

**Manage Custom Spawn**

Allows the player to set or remove the custom spawn location.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_spawn.first

**Manage First Spawn**

Allows the player to set or remove the first spawn location.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_warps

**Manage Warps**

Allows the player to open the admin manage warps menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_warps.add

**Add Warps**

Allows the player to add warps from the admin manage warps menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_warps.edit

**Edit Warps**

Allows the player to edit warps from the admin manage warps menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_warps.delete

**Delete Warps**

Allows the player to delete warps from the admin manage warps menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_announcements

**Manage Announcements**

Allows the player to open the admin manage announcements menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_announcements.add

**Add Announcements**

Allows the player to add announcements from the admin announcements menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_announcements.edit

**Edit Announcements**

Allows the player to edit announcements from the admin announcements menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_announcements.delete

**Delete Announcements**

Allows the player to delete announcements from the admin announcements menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.game_rules

**Manage Game Rules**

Allows the player to manage game rules. Use data values to allow specific game rule keys.

Data Type | Scope
--- | ---
string | global

## thm_rmt:admin.settings

**Manage Settings**

Allows the player to open the admin settings menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.menu_editor

**Manage Menu Editor**

Allows the player to edit the addon menu.

Data Type | Scope
--- | ---
allow/deny | global
