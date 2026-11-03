---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Technical permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:admin.holograms.cleanup

**Clean Up Hologram Hitboxes**

Scan loaded chunks for linked hologram hitboxes and remove unused or duplicate entities. Keeps hitboxes needed by active holograms and does not delete saved holograms or load distant chunks.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.portals

**Manage Realm Portals**

Create, edit, move, delete and assign actions to shared realm portals in Technical. Portals survive staff purges. Hard safety caps and claim build rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:block_commands.use

**Use Block Commands**

Activate stored commands on assigned blocks. Block interaction permissions, locks and claim rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.block_commands.view

**View Block Commands**

Browse protected block bindings and their separate hit and right-click stored commands in Technical.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.block_commands.edit

**Edit Block Commands**

Assign blocks and edit their stored commands. Requires View Block Commands. Trusted administrators only.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.block_commands.delete

**Remove Block Commands**

Remove a block binding and its protection, including unloaded bindings. Requires View Block Commands.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.loot.view

**View Custom Loot**

Browse shared custom loot tables in Technical.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.loot.create

**Create Custom Loot**

Create loot tables with pools, weighted entries and item functions. Requires View Custom Loot.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.loot.edit

**Edit Custom Loot**

Edit shared loot tables. Requires View Custom Loot.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.loot.delete

**Delete Custom Loot**

Delete shared loot tables. Requires View Custom Loot.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.loot.test

**Test Custom Loot**

Preview generated loot without giving or spawning items. Requires View Custom Loot.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.metadata.view

**View Metadata**

Browse world and personal metadata in Technical. Other players also require command.metadata.player.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.metadata.edit

**Edit Metadata**

Create and edit metadata through Technical. Requires metadata viewer access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.metadata.delete

**Delete Metadata**

Remove metadata through Technical. Requires metadata viewer access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.view

**View Managed Scoreboards**

View placeholder scoreboards in Technical.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.create

**Create Managed Scoreboards**

Create numeric placeholder scoreboards or online-only copies of existing objectives.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.edit

**Edit Managed Scoreboards**

Edit or refresh managed scoreboards and display copies. Display activation and cycles have separate permissions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.delete

**Delete Managed Scoreboards**

Delete managed objectives and their scores.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.display

**Manage Scoreboard Displays**

Activate or hide online-only scoreboards independently in Sidebar, Player List and Below Name. Replacing an unrelated displayed objective requires confirmation; its scores are preserved.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.scoreboards.cycle

**Manage Scoreboard Cycles**

Choose ordered display playlists and rotation intervals independently for Sidebar, Player List and Below Name. Requires scoreboard viewing access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.stats.view

**View Stat Definitions**

View stat definitions in Technical.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.stats.create

**Create Stats**

Create custom statistics and choose tracking sources.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.stats.edit

**Edit Stats**

Edit or temporarily disable statistics other than protected playtime.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.stats.delete

**Delete Stats**

Permanently delete a statistic and all player values. Playtime cannot be deleted.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:technical.errors.view

**View Error Log**

View technical error reports, details and player references in the Technical menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:technical.errors.notify

**Error Notifications**

Receive rate-limited notifications about reported configuration problems and failures. Does not grant log access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:technical.errors.delete

**Delete Error Entries**

Delete individual error log entries. The menu also requires View Error Log.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:technical.errors.clear

**Clear Error Log**

Clear the entire error log. The menu also requires View Error Log.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.events

**Manage Technical Events**

Create and manage after-event bindings that execute stored commands as event entities or in a dimension. Grants powerful automation; trusted administrators only.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.npc.manage

**Manage NPCs**

Allows spawning, removing and editing Realm Management NPCs, including their styles and blueprints.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.npc.actions

**Manage NPC Actions**

Attach, remove and reorder stored-command and custom-form NPC actions. Can configure powerful command actions; trusted administrators only. Also requires Manage NPCs.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.custom_forms

**Manage Custom Forms**

Allows the player to create, edit and delete custom forms.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:form

**Custom Form Access**

Allows access to a custom form by id. Example form=(rules)

Data Type | Scope
--- | ---
string | global
