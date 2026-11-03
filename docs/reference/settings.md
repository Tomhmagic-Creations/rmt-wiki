---
description: "Exact settings reference for the current documented V2 build. Use the feature guides for setup and examples."
---

# 📋 Settings reference

Exact settings reference for the current documented V2 build. Use the feature guides for setup and examples.




Realm setting keys, labels, defaults and ranges. Per-feature editors and personal preferences are described in their own guides.

## messagePrefix

**Message Prefix**

Prefix for all messages.

Category | Input | Default | Range / Step
--- | --- | --- | ---
general | text | `"§f[§dRMT§f]:§r "` | not declared

## giveRMTTool

**Give RMT Tool**

Give the RMT Tool to players when they join the world.

Category | Input | Default | Range / Step
--- | --- | --- | ---
general | boolean | `true` | not declared

## customNameplates

**Custom Nameplates**

Use custom text displays for player nameplates.

Category | Input | Default | Range / Step
--- | --- | --- | ---
general | boolean | `false` | not declared

## nameplateDefaultPreset

**Default Nameplate Preset**

Preset ID used when no enabled preset is assigned.

Category | Input | Default | Range / Step
--- | --- | --- | ---
general | text | `"default"` | not declared

## pvpMode

**PvP Mode**

Off disables player combat. Toggle requires both players to opt in with /pvp. Team uses team friendly fire. Team and Toggle requires both. All ignores personal and team choices. Claim protections still apply.

Category | Input | Default | Range / Step
--- | --- | --- | ---
general | dropdown | `2` | not declared

Index | Choice
--- | ---
0 | Off
1 | Toggle
2 | Team
3 | Team and Toggle
4 | All

## mailDuplicateMinutes

**Mail Duplicate Window (Minutes)**

How long identical letters to the same recipient are blocked, even after deletion.

Category | Input | Default | Range / Step
--- | --- | --- | ---
mail | slider | `60` | 1 to 60; step 1

## mailInboxLimit

**Mail Inbox Limit**

Maximum stored letters per player. A full inbox refuses new mail; existing mail is never automatically removed.

Category | Input | Default | Range / Step
--- | --- | --- | ---
mail | slider | `100` | 10 to 200; step 10

## mailOutboxLimit

**Mail Sent-History Limit**

Maximum entries in each player's private outbox and, separately, broadcast history. Old entries must be removed manually.

Category | Input | Default | Range / Step
--- | --- | --- | ---
mail | slider | `100` | 10 to 200; step 10

## startingClaimAllowance

**Starting Claim Allowance**

Starting claim allowance for new players.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | slider | `10` | 0 to 100; step 1

## claimAllowanceFrequency

**Claim Allowance Earn Frequency**

Frequency in minutes for earning claim allowance.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | slider | `60` | 30 to 300; step 10

## claimEntryExitMessages

**Claim Entry/Exit Messages**

Show an action-bar message when players enter or leave a claim, even when their personal claim-border display is off.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## claimSafeRadius

**Claim Safe Radius**

The radius in chunks to which you cannot make a new claim next to another player's claim

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | slider | `10` | 1 to 100; step 1

## defaultClaimOptionMonsterSpawn

**Default: Monster Spawning**

Choose whether hostile creatures can spawn in the claim by default.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## defaultClaimOptionExplosion

**Default: Explosions**

Choose whether explosions can affect the claim by default.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `false` | not declared

## defaultClaimOptionEntityDamage

**Default: Entity Damage to Players**

Choose whether entities can damage players in the claim by default.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## defaultClaimOptionPlayerDamage

**Default: Player Damage to Players**

Choose whether players can damage other players in the claim by default.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `false` | not declared

## canEditClaimOptionMonsterSpawn

**Allow Editing: Monster Spawning**

Allow claim owners to change the monster spawning option.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## canEditClaimOptionExplosion

**Allow Editing: Explosions**

Allow claim owners to change the explosions option.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## canEditClaimOptionEntityDamage

**Allow Editing: Entity Damage to Players**

Allow claim owners to change the entity damage to players option.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## canEditClaimOptionPlayerDamage

**Allow Editing: Player Damage to Players**

Allow claim owners to change the player damage to players option.

Category | Input | Default | Range / Step
--- | --- | --- | ---
claiming | boolean | `true` | not declared

## cancelTPOnDamage

**Cancel TP on Damage**

Overrides the damage types below

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCooldown

**Cancel TP Damage Cooldown**

Cooldown in seconds after taking damage you can teleport.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | slider | `5` | 1 to 60; step 1

## cancelTPOnMovement

**Cancel TP on Movement**

Cancel teleport if the player moves.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## rtpAvoidClaims

**RTP Avoid Claims**

Keep random teleports out of all claims, including claims the player may enter. When off, claim entry rules still apply.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_block

**Cancel TP on Block Damage**

Cancel teleport if the player takes block damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_entity

**Cancel TP on Entity Damage**

Cancel teleport if the player takes entity damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_player

**Cancel TP on Player Damage**

Cancel teleport if the player takes player damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_projectile

**Cancel TP on Projectile Damage**

Cancel teleport if the player takes projectile damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_environment

**Cancel TP on Environment Damage**

Cancel teleport if the player takes environment damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## cancelTPDamageCase_other

**Cancel TP on Other Damage**

Cancel teleport if the player takes other damage.

Category | Input | Default | Range / Step
--- | --- | --- | ---
teleport | boolean | `true` | not declared

## afkTime

**AFK Time**

Time in minutes before a player is marked as AFK, set to 0 to disable.

Category | Input | Default | Range / Step
--- | --- | --- | ---
afk | slider | `5` | 0 to 20; step 1

## afkSpawn

**AFK Spawn**

If monsters can spawn around AFK players. If non afk players are also nearby, entities will still spawn.

Category | Input | Default | Range / Step
--- | --- | --- | ---
afk | boolean | `false` | not declared

## afkSpawnRadius

**AFK Spawn Radius**

Radius in blocks around the AFK player that monsters cannot spawn.

Category | Input | Default | Range / Step
--- | --- | --- | ---
afk | slider | `20` | 5 to 50; step 5

## afkKick

**AFK Kick**

Time in minutes before an AFK player is kicked, set to 0 to disable.~LINEBREAK~Warning: If using this Add-On on a local world (not a realm), kicks require the world to be restarted before the player can rejoin.

Category | Input | Default | Range / Step
--- | --- | --- | ---
afk | slider | `0` | 0 to 120; step 5

## savedInventories

**Saved Inventories**

Save inventories, hotbars, equipment and ender chests at logout for offline viewing and editing. Real Minecraft operators and players with thm_rmt:inventory.saved.bypass are excluded.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared

## maintenanceMode

**Maintenance Mode**

Enable maintenance mode so only players with the maintenance bypass permission can join.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared

## streamerModeBlockSensitiveMenus

**Block Sensitive Menus During Streamer Mode**

Prevent players using Streamer Mode from opening report details, punishment history, inventory viewers, action log results, and error details. Other permissions still apply.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `true` | not declared

## whitelist

**Whitelist**

Turn on the whitelist so only players on the whitelist can join.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared

## purgeDays

**Purge Days**

Real days before purging inactive player data.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | slider | `90` | 30 to 360; step 30

## announceWarn

**Announce Warns?**

Announce Warns publicly.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared

## announceKick

**Announce Kicks?**

Announce Kicks publicly.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared

## announceBan

**Announce Bans?**

Announce Bans publicly.

Category | Input | Default | Range / Step
--- | --- | --- | ---
moderation | boolean | `false` | not declared
