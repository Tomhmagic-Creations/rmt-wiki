---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Moderation permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:mod.action_log.view

**View Action Log**

Open moderation Action Log and read permitted history. Lookup permissions are also required.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.action_log.player

**Look Up Player Actions**

Search retained action history by player name or ID, including offline players. Also requires View Action Log.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.action_log.area

**Look Up Area Actions**

Browse all action history or search a dimension, block or nearby area. Also requires View Action Log.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.action_log.inspect

**Inspect Block History**

Toggle non-destructive block history inspection. Also requires View Action Log and area lookup.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.action_log.purge

**Purge Action History**

Delete action history by age and action type. Independent of player purging. The moderation menu also requires View Action Log.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.action_log.clear

**Clear Action History**

Clear all currently recorded actions after confirmation. New actions recorded afterward are retained.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:report

**Submit Reports**

Report a registered player using /thm_rmt:report.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.view

**View Reports**

Search and read active player reports.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.action

**Review Reports**

Change report status and outcome and add staff notes.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.archive

**Archive Reports**

Archive or restore player reports. Viewing the corresponding list is also required.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.view_archived

**View Archived Reports**

Search and read archived player reports.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.delete

**Delete Reports**

Permanently delete reports and their review history.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:reports.admin

**Manage Reports**

All report management and report-triggered punishment automation. Does not grant manual punishment permissions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:moderation.automation

**Punishment Automation**

Manage escalation rules triggered by warnings, kicks and temporary bans.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:banned_items.bypass

**Bypass Banned Items**

Allows the player to bypass banned items restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.spy.creative

**Creative Spy Mode**

Allows selecting Creative spy mode with invisibility and hidden geometry. Also requires Spy Mode; leaving spy restores the original game mode.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.spy

**Spy Mode**

Allows Spectator spy mode. Creative spy requires its additional permission. Leaving spy restores the original game mode.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.gamemode

**Gamemode Management**

Allows the player to use moderator gamemode management.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.tp

**Teleport To Player**

Allows the player to teleport to another player from the moderator menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.tp_here

**Teleport Player Here**

Allows the player to teleport another player to themselves from the moderator menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee

**InvSee**

Allows the player to open the InvSee menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:inventory.saved.bypass

**Saved Inventory Bypass**

Prevents saving this player's inventories for offline viewing and editing. Real Minecraft operators always bypass saving.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.inventory

**View Inventory**

Allows the player to view another player's inventory.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.hotbar

**View Hotbar**

Allows the player to view another player's hotbar.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.armor

**View Armor**

Allows the player to view another player's armor.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.enderchest

**View Ender Chest**

Allows the player to view another player's ender chest.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.edit

**Edit InvSee Items**

Allows the player to replace items through InvSee.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.take

**Take InvSee Items**

Allows the player to take items through InvSee.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.invsee.clear

**Clear InvSee Items**

Allows the player to clear items through InvSee.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.whitelist

**Manage Whitelist**

Allows the player to open the whitelist management menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.whitelist.view

**View Whitelist**

Allows the player to view the whitelist.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.whitelist.add

**Add Whitelist Entries**

Allows the player to add names to the whitelist.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.whitelist.remove

**Remove Whitelist Entries**

Allows the player to remove names from the whitelist.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.banned_items

**Manage Banned Items**

Allows the player to open the banned items management menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.banned_items.add

**Add Banned Items**

Allows the player to add item IDs to the banned items list.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.banned_items.remove

**Remove Banned Items**

Allows the player to remove item IDs from the banned items list.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.warn

**Warn Players**

Allows the player to warn other players.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.kick

**Kick Players**

Allows the player to kick online players.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.ban

**Ban Online Players**

Ban online players. Permanent bans also require mod.ban.perm; temporary bans respect mod.ban.max_duration.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.ban.perm

**Permanently Ban Online Players**

Issue permanent online bans, including commands with omitted or zero duration. Also requires mod.ban.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.ban.max_duration

**Maximum Online Ban Duration**

Maximum temporary ban in whole seconds, e.g. mod.ban.max_duration=(86400) for one day. Zero or deny disables temporary bans; missing or wildcard is unlimited. Invalid values reject bans. Does not grant ban access.

Data Type | Scope
--- | ---
number | global

## thm_rmt:mod.ban_offline

**Ban Offline Players**

Use /banoffline with a known player name, or ban offline players through Moderation. Permanent bans also require mod.ban_offline.perm; temporary bans respect mod.ban_offline.max_duration.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.ban_offline.perm

**Permanently Ban Offline Players**

Issue permanent bans through /banoffline or the offline ban form. Also requires mod.ban_offline. Does not grant permanent online bans.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.ban_offline.max_duration

**Maximum Offline Ban Duration**

Maximum temporary offline ban in whole seconds, e.g. mod.ban_offline.max_duration=(86400). Zero or deny disables temporary bans; missing or wildcard is unlimited. Invalid values reject bans. Does not grant ban access.

Data Type | Scope
--- | ---
number | global

## thm_rmt:mod.unban

**Unban Players**

Allows the player to unban players.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.punishments

**View Punishments**

Allows the player to view player punishments.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.punishments.delete_warns

**Delete Warnings**

Allows the player to delete warning records.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.punishments.delete_kicks

**Delete Kicks**

Allows the player to delete kick records.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.punishments.delete_bans

**Delete Bans**

Allows the player to delete ban records.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.nether_bypass

**Bypass Nether Restrictions**

Allows the player to bypass nether restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.end_bypass

**Bypass End Restrictions**

Allows the player to bypass end restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.lock_bypass

**Bypass Lock Restrictions**

Allows the player to bypass other players locks.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.whitelist_bypass

**Bypass Whitelist Restrictions**

Allows the player to bypass whitelist restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.maintenance_bypass

**Bypass Maintenance Mode**

Allows the player to bypass maintenance mode restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.manage.holograms

**Manage Players Holograms**

Allows the player to manage other players' holograms and attach stored commands to hologram hit/interact actions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mod.manage.playerwarps

**Manage Players Warps**

Allows the player to manage other players' warps.

Data Type | Scope
--- | ---
allow/deny | global
