---
description: "Exact game rule reference for the current documented V2 build. Use the feature guides for setup and examples."
---

# 📋 Game rule reference

Exact game rule reference for the current documented V2 build. Use the feature guides for setup and examples.




Native rule properties available in the installed server API. The RMT Manage World editor discovers actual live world.gameRules, shows permitted boolean/numeric properties and writes the native values. This is not an RMT default-setting table; current values come from the world. Numbers must be safe non-negative whole numbers no greater than 2147483647 in the editor. All edits are validated/authorised before the first rule is applied; native setters can still throw. PvP mode remains authoritative and corrects conflicting native pvp edits.

Property / Data-Permission Value | Type | API Description
--- | --- | ---
`commandBlockOutput` | boolean | Whether command blocks should notify admins when they perform commands.
`commandBlocksEnabled` | boolean | Controls whether command blocks can execute commands.
`doDayLightCycle` | boolean | Controls whether the day and night cycles progress.
`doEntityDrops` | boolean | Controls whether non-mob entities do drops. ie. Item Frame
`doFireTick` | boolean | Controls whether fire spreads.
`doImmediateRespawn` | boolean | Controls whether players immediately respawn or are shown the death screen.
`doInsomnia` | boolean | Controls whether players deal with the effects of not sleeping (such as Phantom spawning).
`doLimitedCrafting` | boolean | Determines whether players should be able to craft only those recipes that they've unlocked first - when dolimitedcrafting is set to true.
`doMobLoot` | boolean | Controls whether mobs drop loot.
`doMobSpawning` | boolean | Controls whether mobs spawn naturally in the world.
`doTileDrops` | boolean | Controls whether blocks drop items when destroyed.
`doWeatherCycle` | boolean | Controls whether the weather can change naturally.
`drowningDamage` | boolean | Controls whether entities take damage from drowning.
`fallDamage` | boolean | Controls whether entities take damage from falling.
`fireDamage` | boolean | Controls whether entities take damage from fire.
`freezeDamage` | boolean | Controls whether there is damage from freezing.
`functionCommandLimit` | number | The maximum number of commands that can be executed simultaneously by the /function command.
`keepInventory` | boolean | Controls whether players keep their inventories when they die.
`maxCommandChainLength` | number | The maximum number of chained commands that can execute per tick.
`mobGriefing` | boolean | Controls whether mob griefing can happen in the world. Example: A Creeper explosion destroying blocks.
`naturalRegeneration` | boolean | Controls whether players can regenerate health.
`playersSleepingPercentage` | number | The percentage of players required to be sleeping in order to advance to the next day.
`projectilesCanBreakBlocks` | boolean | Controls whether projectiles (entities with a projectile component, like Arrows, thrown Tridents or Fireworks) can destroy certain blocks that support this interaction (such as Chorus Fruit, Dripstone or Decorated Pots). Restrictions on which projectiles can destroy certain blocks apply.
`pvp` | boolean | Controls whether players can damage each other.
`randomTickSpeed` | number | Controls how frequently random ticks occur. A value of 0 or less will disable random ticks. The default value is 1.
`recipesUnlock` | boolean | Controls whether built-in (vanilla) recipes automatically unlock as the player progresses through the game (one alternative to this is to use the /recipe command based on custom gameplay logic.)
`respawnBlocksExplode` | boolean | Controls whether respawn blocks (e.g. Bed, Respawn Anchor) explode in other dimensions.
`sendCommandFeedback` | boolean | Controls whether command output is displayed to players. Also controls whether Command Block output is stored by default.
`showBorderEffect` | boolean | Controls whether Border Block effects are shown.
`showCoordinates` | boolean | Controls whether player coordinates are displayed.
`showDaysPlayed` | boolean | Controls whether the days a player has played is displayed.
`showDeathMessages` | boolean | Controls whether death messages are displayed in chat.
`showRecipeMessages` | boolean | Controls whether standard player notifications for recipes will show. When set to false, 'player unlocked recipes' are no longer sent as player notifications.
`showTags` | boolean | Controls whether item tags are shown. E.g. 'Can Place On', 'Can Destroy', item lock icons, etc.
`spawnRadius` | number | The block radius from world spawn that a player is allowed to spawn in. Does not affect Adventure mode. The default value is 10 blocks.
`tntExplodes` | boolean | Affects whether TNT blocks can be lit.
`tntExplosionDropDecay` | boolean | Controls whether blocks randomly drop loot or all blocks drop loot when destroyed by an explosion. Defaults to false.
