---
description: "Exact command reference for the current documented V2 build. Use the feature guides for setup and examples."
---

# 📋 Command reference

Exact command reference for the current documented V2 build. Use the feature guides for setup and examples.




Required arguments use angle brackets; optional arguments use square brackets. Full names avoid collisions with vanilla and other addons.

A command node alone may not grant the underlying feature, access to another player, or destination. Native restricted-level commands are operator-enforced. Server/command-block support depends on the callback; a selector does not automatically make every command automation-compatible. See the feature manual for execution rules.

## sort

```text
/thm_rmt:sort <thm_rmt:SortTarget:Enum>
```

Sort the looked-at block/entity container, or your own inventory without the hotbar.

- Aliases: none.
- Command permission: `thm_rmt:command.sort`.
- Native level: `Any`. Cheats required: false.

## sortblock

```text
/thm_rmt:sortblock <location:Location> [dimensionID:String]
```

Sort a loaded block container at a location, optionally in another dimension.

- Aliases: none.
- Command permission: `thm_rmt:command.sortblock`.
- Native level: `Any`. Cheats required: false.

## sortentity

```text
/thm_rmt:sortentity <entities:EntitySelector>
```

Sort selected entity containers or player inventories; player hotbars are excluded.

- Aliases: none.
- Command permission: `thm_rmt:command.sortentity`.
- Native level: `Any`. Cheats required: false.

## impulse

```text
/thm_rmt:impulse <entities:EntitySelector> <x:Float> <y:Float> <z:Float>
```

Add an impulse vector to selected entities' current motion.

- Aliases: none.
- Command permission: `thm_rmt:command.impulse`.
- Native level: `Any`. Cheats required: false.

## clearvelocity

```text
/thm_rmt:clearvelocity <entities:EntitySelector>
```

Clear selected entities' current motion without permanently freezing them.

- Aliases: none.
- Command permission: `thm_rmt:command.clearvelocity`.
- Native level: `Any`. Cheats required: false.

## entityremove

```text
/thm_rmt:entityremove <entities:EntitySelector>
```

Remove non-player, non-RMT entities without death animations or loot.

- Aliases: none.
- Command permission: `thm_rmt:command.entityremove`.
- Native level: `Any`. Cheats required: false.

## ignite

```text
/thm_rmt:ignite <entities:EntitySelector> <seconds:Float>
```

Set selected entities on fire for a duration in seconds.

- Aliases: none.
- Command permission: `thm_rmt:command.ignite`.
- Native level: `Any`. Cheats required: false.

## extinguish

```text
/thm_rmt:extinguish <entities:EntitySelector>
```

Extinguish selected entities without applying damage.

- Aliases: none.
- Command permission: `thm_rmt:command.extinguish`.
- Native level: `Any`. Cheats required: false.

## explosion

```text
/thm_rmt:explosion <position:Location> <radius:Float> [breakBlocks:Boolean] [fire:Boolean] [underwater:Boolean] [dimensionID:String]
```

Create an explosion with radius 0.1-32; block breaking, fire and underwater operation default off.

- Aliases: none.
- Command permission: `thm_rmt:command.explosion`.
- Native level: `Any`. Cheats required: false.

## particleplayer

```text
/thm_rmt:particleplayer <players:PlayerSelector> <particleID:String> <position:Location> [dimensionID:String] [variables:String]
```

Spawn a particle visible only to selected players; optional variables are comma-separated name=number values.

- Aliases: none.
- Command permission: `thm_rmt:command.particleplayer`.
- Native level: `Any`. Cheats required: false.

## blockinfo

```text
/thm_rmt:blockinfo <position:Location> [dimensionID:String]
```

Inspect a loaded block's states, tags, components, light and redstone power.

- Aliases: none.
- Command permission: `thm_rmt:command.blockinfo`.
- Native level: `Any`. Cheats required: false.

## entityinfo

```text
/thm_rmt:entityinfo <entities:EntitySelector>
```

Inspect entity identity, position, health, motion, tags and components without exposing private dynamic properties.

- Aliases: none.
- Command permission: `thm_rmt:command.entityinfo`.
- Native level: `Any`. Cheats required: false.

## itemname

```text
/thm_rmt:itemname <entities:EntitySelector> <text:String> [thm_rmt:LootSlot:Enum] [slotId:Integer]
```

Set an existing item's name; empty text clears it. Defaults to main hand.

- Aliases: none.
- Command permission: `thm_rmt:command.itemname`.
- Native level: `Any`. Cheats required: false.

## itemlore

```text
/thm_rmt:itemlore <entities:EntitySelector> <text:String> [thm_rmt:LootSlot:Enum] [slotId:Integer]
```

Set existing item lore with literal 
 separators; empty text clears it. Defaults to main hand.

- Aliases: none.
- Command permission: `thm_rmt:command.itemlore`.
- Native level: `Any`. Cheats required: false.

## itemdurability

```text
/thm_rmt:itemdurability <entities:EntitySelector> <remainingPercent:Float> [thm_rmt:LootSlot:Enum] [slotId:Integer]
```

Set an existing item's remaining durability percentage (0-100). Defaults to main hand.

- Aliases: none.
- Command permission: `thm_rmt:command.itemdurability`.
- Native level: `Any`. Cheats required: false.

## entitymetadatastring

```text
/thm_rmt:entitymetadatastring <entities:EntitySelector> <key:String> <value:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatastring`.
- Native level: `Any`. Cheats required: false.

## entitymetadatastringget

```text
/thm_rmt:entitymetadatastringget <entities:EntitySelector> <key:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatastringget`.
- Native level: `Any`. Cheats required: false.

## entitymetadatabool

```text
/thm_rmt:entitymetadatabool <entities:EntitySelector> <key:String> <value:Boolean>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatabool`.
- Native level: `Any`. Cheats required: false.

## entitymetadataboolget

```text
/thm_rmt:entitymetadataboolget <entities:EntitySelector> <key:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadataboolget`.
- Native level: `Any`. Cheats required: false.

## entitymetadatanumber

```text
/thm_rmt:entitymetadatanumber <entities:EntitySelector> <key:String> <value:Float>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatanumber`.
- Native level: `Any`. Cheats required: false.

## entitymetadatanumberget

```text
/thm_rmt:entitymetadatanumberget <entities:EntitySelector> <key:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatanumberget`.
- Native level: `Any`. Cheats required: false.

## entitymetadatavector

```text
/thm_rmt:entitymetadatavector <entities:EntitySelector> <key:String> <x:Float> <y:Float> <z:Float>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatavector`.
- Native level: `Any`. Cheats required: false.

## entitymetadatavectorget

```text
/thm_rmt:entitymetadatavectorget <entities:EntitySelector> <key:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatavectorget`.
- Native level: `Any`. Cheats required: false.

## entitymetadatalist

```text
/thm_rmt:entitymetadatalist <entities:EntitySelector>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadatalist`.
- Native level: `Any`. Cheats required: false.

## entitymetadataremove

```text
/thm_rmt:entitymetadataremove <entities:EntitySelector> <key:String>
```

Manage metadata on non-player entities. Vectors use three numeric components.

- Aliases: none.
- Command permission: `thm_rmt:command.entitymetadataremove`.
- Native level: `Any`. Cheats required: false.

## raycastblock

```text
/thm_rmt:raycastblock <position:Location> <directionX:Float> <directionY:Float> <directionZ:Float> [maxDistance:Float] [includeLiquids:Boolean] [includePassable:Boolean] [excludeTypes:String] [includeTypes:String] [dimensionID:String]
```

Find a loaded block along a ray. Type filters are comma-separated IDs or none; max distance defaults to 16.

- Aliases: none.
- Command permission: `thm_rmt:command.raycastblock`.
- Native level: `Any`. Cheats required: false.

## raycastentity

```text
/thm_rmt:raycastentity <position:Location> <directionX:Float> <directionY:Float> <directionZ:Float> [maxDistance:Float] [ignoreBlockCollision:Boolean] [includeLiquids:Boolean] [includePassable:Boolean] [matchEntities:EntitySelector] [dimensionID:String]
```

Find the nearest matching entity along a ray; an optional selector filters against every selected entity.

- Aliases: none.
- Command permission: `thm_rmt:command.raycastentity`.
- Native level: `Any`. Cheats required: false.

## tpa

```text
/thm_rmt:tpa <Player:PlayerSelector>
```

Request to teleport to another player.

- Aliases: none.
- Command permission: `thm_rmt:command.tpa`.
- Native level: `Any`. Cheats required: false.

## tpahere

```text
/thm_rmt:tpahere <Player:PlayerSelector>
```

Request another player to teleport to you.

- Aliases: none.
- Command permission: `thm_rmt:command.tpahere`.
- Native level: `Any`. Cheats required: false.

## tpaccept

```text
/thm_rmt:tpaccept [Player:PlayerSelector] [thm_rmt:TeleportRequestType:Enum]
```

Accept one incoming TPA or TPHERE request.

- Aliases: none.
- Command permission: `thm_rmt:command.tpaccept`.
- Native level: `Any`. Cheats required: false.

## tpdeny

```text
/thm_rmt:tpdeny [Player:PlayerSelector] [thm_rmt:TeleportRequestType:Enum]
```

Deny one incoming TPA or TPHERE request.

- Aliases: none.
- Command permission: `thm_rmt:command.tpdeny`.
- Native level: `Any`. Cheats required: false.

## tpacancel

```text
/thm_rmt:tpacancel [Player:PlayerSelector] [thm_rmt:TeleportRequestType:Enum]
```

Cancel outgoing TPA and TPHERE requests.

- Aliases: `thm_rmt:tpc`.
- Command permission: `thm_rmt:command.tpacancel`.
- Native level: `Any`. Cheats required: false.

## back

```text
/thm_rmt:back
```

Return to your previous location.

- Aliases: none.
- Command permission: `thm_rmt:command.back`.
- Native level: `Any`. Cheats required: false.

## deathback

```text
/thm_rmt:deathback
```

Return to your death location.

- Aliases: none.
- Command permission: `thm_rmt:command.deathback`.
- Native level: `Any`. Cheats required: false.

## home

```text
/thm_rmt:home <name:String>
```

Travel to one of your saved homes.

- Aliases: none.
- Command permission: `thm_rmt:command.home`.
- Native level: `Any`. Cheats required: false.

## homes

```text
/thm_rmt:homes
```

List your saved homes.

- Aliases: none.
- Command permission: `thm_rmt:command.homes`.
- Native level: `Any`. Cheats required: false.

## sethome

```text
/thm_rmt:sethome <name:String>
```

Save a new home at your location.

- Aliases: none.
- Command permission: `thm_rmt:command.sethome`.
- Native level: `Any`. Cheats required: false.

## delhome

```text
/thm_rmt:delhome <name:String>
```

Remove one of your saved homes.

- Aliases: none.
- Command permission: `thm_rmt:command.delhome`.
- Native level: `Any`. Cheats required: false.

## warp

```text
/thm_rmt:warp <name:String> [players:PlayerSelector]
```

Travel to a realm warp.

- Aliases: none.
- Command permission: `thm_rmt:command.warp`.
- Native level: `Any`. Cheats required: false.

## warps

```text
/thm_rmt:warps
```

List accessible realm warps.

- Aliases: none.
- Command permission: `thm_rmt:command.warps`.
- Native level: `Any`. Cheats required: false.

## playerwarp

```text
/thm_rmt:playerwarp <ownerNameOrID:String> <warpID:String> [players:PlayerSelector]
```

Travel to a player's warp by owner name or ID and warp ID.

- Aliases: `thm_rmt:pwarp`.
- Command permission: `thm_rmt:command.playerwarp`.
- Native level: `Any`. Cheats required: false.

## teamhome

```text
/thm_rmt:teamhome
```

Teleport to your team's home.

- Aliases: none.
- Command permission: `thm_rmt:command.teamhome`.
- Native level: `Any`. Cheats required: false.

## teamsethome

```text
/thm_rmt:teamsethome
```

Set your team's home here; requires team management access.

- Aliases: none.
- Command permission: `thm_rmt:command.teamsethome`.
- Native level: `Any`. Cheats required: false.

## teamwarp

```text
/thm_rmt:teamwarp <Warp:String>
```

Teleport to one of your team's warps by ID or exact name.

- Aliases: none.
- Command permission: `thm_rmt:command.teamwarp`.
- Native level: `Any`. Cheats required: false.

## chunks

```text
/thm_rmt:chunks <thm_rmt:PlayerCommandState:Enum>
```

Turn your private chunk outlines on or off.

- Aliases: none.
- Command permission: `thm_rmt:command.chunks`.
- Native level: `Any`. Cheats required: false.

## claimborders

```text
/thm_rmt:claimborders <thm_rmt:PlayerCommandState:Enum>
```

Turn your private claim borders on or off.

- Aliases: none.
- Command permission: `thm_rmt:command.claimborders`.
- Native level: `Any`. Cheats required: false.

## stats

```text
/thm_rmt:stats [PlayerName:String] [Page:Integer]
```

List visible player stats. Quote player names containing spaces; page defaults to 1.

- Aliases: none.
- Command permission: `thm_rmt:command.stats`.
- Native level: `Any`. Cheats required: false.

## warn

```text
/thm_rmt:warn <playerName:String> <reason:String>
```

Warn an online or registered offline player by name.

- Aliases: none.
- Command permission: `thm_rmt:command.warn`.
- Native level: `Any`. Cheats required: false.

## unban

```text
/thm_rmt:unban <playerName:String>
```

Revoke active bans for a registered player by name.

- Aliases: none.
- Command permission: `thm_rmt:command.unban`.
- Native level: `Any`. Cheats required: false.

## punishments

```text
/thm_rmt:punishments <playerName:String> [Page:Integer]
```

List a registered player's warning, kick and ban history, 10 entries per page.

- Aliases: none.
- Command permission: `thm_rmt:command.punishments`.
- Native level: `Any`. Cheats required: false.

## invsee

```text
/thm_rmt:invsee <playerName:String>
```

Open an online player's inventory or their saved offline inventory.

- Aliases: none.
- Command permission: `thm_rmt:command.invsee`.
- Native level: `Any`. Cheats required: false.

## heal

```text
/thm_rmt:heal [players:PlayerSelector]
```

Heal yourself or selected online players.

- Aliases: none.
- Command permission: `thm_rmt:command.heal`.
- Native level: `Any`. Cheats required: false.

## feed

```text
/thm_rmt:feed [players:PlayerSelector]
```

Feed yourself or selected online players.

- Aliases: none.
- Command permission: `thm_rmt:command.feed`.
- Native level: `Any`. Cheats required: false.

## spy

```text
/thm_rmt:spy <thm_rmt:PlayerCommandState:Enum> [thm_rmt:SpyMode:Enum]
```

Use /spy on [spectator|creative] or /spy off. Creative spy requires its additional permission.

- Aliases: none.
- Command permission: `thm_rmt:command.spy`.
- Native level: `Any`. Cheats required: false.

## rmtwhitelist

```text
/thm_rmt:rmtwhitelist <thm_rmt:ModerationWhitelistAction:Enum> [playerName:String]
```

Add or remove a whitelist name, or list the whitelist.

- Aliases: none.
- Command permission: `thm_rmt:command.rmtwhitelist`.
- Native level: `Any`. Cheats required: false.

## store

```text
/thm_rmt:store
```

Open the realm store.

- Aliases: none.
- Command permission: `thm_rmt:command.store`.
- Native level: `Any`. Cheats required: false.

## storecategory

```text
/thm_rmt:storecategory <categoryID:String>
```

Open a realm store category or product by ID.

- Aliases: none.
- Command permission: `thm_rmt:command.storecategory`.
- Native level: `Any`. Cheats required: false.

## storeproduct

```text
/thm_rmt:storeproduct <productID:String>
```

Open a realm store category or product by ID.

- Aliases: none.
- Command permission: `thm_rmt:command.storeproduct`.
- Native level: `Any`. Cheats required: false.

## actionlog

```text
/thm_rmt:actionlog [PlayerNameOrID:String] [Hours:Integer] [ActionType:String]
```

Open Action Log, or look up a registered player name or ID. Hours 0 means all time.

- Aliases: `thm_rmt:alog`.
- Command permission: `thm_rmt:mod.action_log.view`.
- Native level: `Any`. Cheats required: false.

## actionlogarea

```text
/thm_rmt:actionlogarea <Radius:Integer> [Hours:Integer] [Position:Location] [DimensionID:String] [ActionType:String]
```

Look up actions near a position. Radius is 0-256 blocks; hours 0 means all time.

- Aliases: `thm_rmt:alogarea`.
- Command permission: `thm_rmt:mod.action_log.view`.
- Native level: `Any`. Cheats required: false.

## actionloginspect

```text
/thm_rmt:actionloginspect [Enabled:Boolean]
```

Toggle block history inspection without modifying or opening the inspected block.

- Aliases: `thm_rmt:aloginspect`.
- Command permission: `thm_rmt:mod.action_log.view`.
- Native level: `Any`. Cheats required: false.

## crates

```text
/thm_rmt:crates
```

Open realm crate management.

- Aliases: none.
- Command permission: `thm_rmt:admin.crates.view`.
- Native level: `Any`. Cheats required: false.

## crateassign

```text
/thm_rmt:crateassign <crateID:String> [position:Location] [dimension:String]
```

Assign a loaded block to a crate ID, or use none to unassign. Defaults to the block you are looking at.

- Aliases: none.
- Command permission: `thm_rmt:admin.crates.assign`.
- Native level: `Any`. Cheats required: false.

## cratekey

```text
/thm_rmt:cratekey <crateID:String> <players:PlayerSelector> [quantity:Integer]
```

Give authenticated keys for a crate to selected players. Only crates using Key accept this command.

- Aliases: none.
- Command permission: `thm_rmt:admin.crates.give`.
- Native level: `Any`. Cheats required: false.

## customlootspawn

```text
/thm_rmt:customlootspawn <lootID:String> <position:Location> [dimensionID:String]
```

Generate a custom loot table and spawn its items at a location.

- Aliases: none.
- Command permission: `thm_rmt:command.customlootspawn`.
- Native level: `Any`. Cheats required: false.

## customlootgive

```text
/thm_rmt:customlootgive <lootID:String> <target:EntitySelector>
```

Generate a custom loot table and give its items to selected entities.

- Aliases: none.
- Command permission: `thm_rmt:command.customlootgive`.
- Native level: `Any`. Cheats required: false.

## customlootblock

```text
/thm_rmt:customlootblock <lootID:String> <position:Location> [randomSlots:Boolean] [dimensionID:String]
```

Generate a custom loot table and insert its items into a block container.

- Aliases: none.
- Command permission: `thm_rmt:command.customlootblock`.
- Native level: `Any`. Cheats required: false.

## customlootreplace

```text
/thm_rmt:customlootreplace <lootID:String> <target:EntitySelector> <thm_rmt:LootSlot:Enum> <slotId:Integer> [count:Integer]
```

Generate a custom loot table and replace selected entity inventory or equipment slots.

- Aliases: none.
- Command permission: `thm_rmt:command.customlootreplace`.
- Native level: `Any`. Cheats required: false.

## customlootreplaceblock

```text
/thm_rmt:customlootreplaceblock <lootID:String> <position:Location> <slotId:Integer> [count:Integer] [dimensionID:String]
```

Generate a custom loot table and replace block container slots.

- Aliases: none.
- Command permission: `thm_rmt:command.customlootreplaceblock`.
- Native level: `Any`. Cheats required: false.

## kit

```text
/thm_rmt:kit [thm_rmt:KitAction:Enum] [kitID:String]
```

Open kits, list available kits or claim a kit by ID.

- Aliases: none.
- Command permission: `thm_rmt:command.kit`.
- Native level: `Any`. Cheats required: false.

## kiteditor

```text
/thm_rmt:kiteditor [thm_rmt:KitEditorAction:Enum] [kitID:String]
```

Manage kits, save your inventory as a template or load a template into an empty inventory.

- Aliases: none.
- Command permission: `thm_rmt:command.kiteditor`.
- Native level: `Any`. Cheats required: false.

## givekit

```text
/thm_rmt:givekit <kitID:String> <players:PlayerSelector>
```

Give a kit to selected online players without consuming their redemption limits or cooldowns.

- Aliases: none.
- Command permission: `thm_rmt:command.givekit`.
- Native level: `Any`. Cheats required: false.

## pvp

```text
/thm_rmt:pvp [thm_rmt:PvPState:Enum]
```

Toggle your personal PvP, or set it on or off when the realm allows it.

- Aliases: none.
- Command permission: `thm_rmt:command.pvp`.
- Native level: `Any`. Cheats required: false.

## waypoint

```text
/thm_rmt:waypoint
```

Open the waypoints menu.

- Aliases: `thm_rmt:wp`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointadd

```text
/thm_rmt:waypointadd <thm_rmt:WaypointScope:Enum> <name:String> [position:Location] [dimension:String] [teamId:String] [player:PlayerSelector]
```

Manage waypoint add. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpadd`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointlist

```text
/thm_rmt:waypointlist <thm_rmt:WaypointScope:Enum> [page:Integer] [teamId:String] [player:PlayerSelector]
```

Manage waypoint list. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wplist`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointinfo

```text
/thm_rmt:waypointinfo <id:String>
```

Manage waypoint info. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpinfo`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointedit

```text
/thm_rmt:waypointedit <id:String> <name:String> <position:Location> <dimension:String>
```

Manage waypoint edit. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpedit`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointstyle

```text
/thm_rmt:waypointstyle <id:String> <thm_rmt:WaypointIcon:Enum> <red:Integer> <green:Integer> <blue:Integer> [minDistance:Float] [maxDistance:Float] [priority:Integer]
```

Manage waypoint style. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpstyle`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointenabled

```text
/thm_rmt:waypointenabled <id:String> <enabled:Boolean>
```

Manage waypoint enabled. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpenabled`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointrestricted

```text
/thm_rmt:waypointrestricted <id:String> <restricted:Boolean>
```

Manage waypoint restricted. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wprestricted`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointremove

```text
/thm_rmt:waypointremove <id:String>
```

Manage waypoint remove. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpremove`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointshow

```text
/thm_rmt:waypointshow <id:String> <visible:Boolean> [player:PlayerSelector]
```

Manage waypoint show. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpshow`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointpin

```text
/thm_rmt:waypointpin <idOrNone:String> [player:PlayerSelector]
```

Manage waypoint pin. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wppin`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## waypointspawn

```text
/thm_rmt:waypointspawn <enabled:Boolean>
```

Manage waypoint spawn. Names with spaces must be quoted. See the waypoint guide for argument order.

- Aliases: `thm_rmt:wpspawn`.
- Command permission: `thm_rmt:command.waypoint`.
- Native level: `Any`. Cheats required: false.

## worldborderget

```text
/thm_rmt:worldborderget <dimension:String>
```

Read a dimension's world border.

- Aliases: none.
- Command permission: `thm_rmt:command.worldborder.get`.
- Native level: `Any`. Cheats required: false.

## worldborderset

```text
/thm_rmt:worldborderset <dimension:String> <size:Integer> [center:Location]
```

Set a square border in chunks. Size 0 disables it; optional center uses the selected chunk.

- Aliases: none.
- Command permission: `thm_rmt:command.worldborder.set`.
- Native level: `Any`. Cheats required: false.

## worldbordercenter

```text
/thm_rmt:worldbordercenter <dimension:String> <center:Location>
```

Move a dimension's border center to the selected chunk.

- Aliases: none.
- Command permission: `thm_rmt:command.worldborder.set`.
- Native level: `Any`. Cheats required: false.

## team

```text
/thm_rmt:team
```

Open the teams menu.

- Aliases: none.
- Command permission: `thm_rmt:team`.
- Native level: `Any`. Cheats required: false.

## teammsg

```text
/thm_rmt:teammsg <message:String>
```

Send a message to online teammates. Quote messages containing spaces.

- Aliases: none.
- Command permission: `thm_rmt:command.teammsg`.
- Native level: `Any`. Cheats required: false.

## metadatastring

```text
/thm_rmt:metadatastring <thm_rmt:MetaDataScope:Enum> <Key:String> <Value:String> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatastring.set`.
- Native level: `Any`. Cheats required: false.

## metadatastringget

```text
/thm_rmt:metadatastringget <thm_rmt:MetaDataScope:Enum> <Key:String> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatastring.get`.
- Native level: `Any`. Cheats required: false.

## metadatabool

```text
/thm_rmt:metadatabool <thm_rmt:MetaDataScope:Enum> <Key:String> <Value:Boolean> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatabool.set`.
- Native level: `Any`. Cheats required: false.

## metadataboolget

```text
/thm_rmt:metadataboolget <thm_rmt:MetaDataScope:Enum> <Key:String> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatabool.get`.
- Native level: `Any`. Cheats required: false.

## metadatanumber

```text
/thm_rmt:metadatanumber <thm_rmt:MetaDataScope:Enum> <Key:String> <Value:Float> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatanumber.set`.
- Native level: `Any`. Cheats required: false.

## metadatanumberget

```text
/thm_rmt:metadatanumberget <thm_rmt:MetaDataScope:Enum> <Key:String> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatanumber.get`.
- Native level: `Any`. Cheats required: false.

## metadatavector

```text
/thm_rmt:metadatavector <thm_rmt:MetaDataScope:Enum> <Key:String> <Value:Location> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatavector.set`.
- Native level: `Any`. Cheats required: false.

## metadatavectorget

```text
/thm_rmt:metadatavectorget <thm_rmt:MetaDataScope:Enum> <Key:String> [Player:PlayerSelector]
```

Read or set typed world/player metadata by key. Get commands read values; set commands change them.

- Aliases: none.
- Command permission: `thm_rmt:command.metadatavector.get`.
- Native level: `Any`. Cheats required: false.

## permnodes

```text
/thm_rmt:permnodes [Search:String] [Page:Integer]
```

List available permission nodes.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permgroups

```text
/thm_rmt:permgroups [Page:Integer]
```

List permission groups.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permgroupinfo

```text
/thm_rmt:permgroupinfo <Group:String>
```

View a permission group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permgroupcreate

```text
/thm_rmt:permgroupcreate <Group:String> <Name:String> [Priority:Integer]
```

Create a permission group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.groups`.
- Native level: `Any`. Cheats required: false.

## permgroupdelete

```text
/thm_rmt:permgroupdelete <Group:String> <Confirm:Boolean>
```

Delete a permission group with confirmation.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.groups`.
- Native level: `Any`. Cheats required: false.

## permplayerinfo

```text
/thm_rmt:permplayerinfo <PlayerName:String>
```

View player groups and personal permissions.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permplayerinfoonline

```text
/thm_rmt:permplayerinfoonline <Players:PlayerSelector>
```

View player groups and personal permissions.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permcheck

```text
/thm_rmt:permcheck <PlayerName:String> <Node:String>
```

Check a player permission.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permcheckonline

```text
/thm_rmt:permcheckonline <Players:PlayerSelector> <Node:String>
```

Check a player permission.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.view`.
- Native level: `Any`. Cheats required: false.

## permgroupnode

```text
/thm_rmt:permgroupnode <Group:String> <thm_rmt:PermissionNodeAction:Enum> <Node:String> [thm_rmt:PermissionDecision:Enum] [Contexts:String]
```

Add or remove a group permission node.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.groups`.
- Native level: `Any`. Cheats required: false.

## permgroupparent

```text
/thm_rmt:permgroupparent <Group:String> <thm_rmt:PermissionNodeAction:Enum> <Parent:String>
```

Add or remove a parent group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.groups`.
- Native level: `Any`. Cheats required: false.

## permgroup

```text
/thm_rmt:permgroup <PlayerName:String> <thm_rmt:PermissionGiveAction:Enum> <Group:String>
```

Give or remove a player group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.assign`.
- Native level: `Any`. Cheats required: false.

## permgrouponline

```text
/thm_rmt:permgrouponline <Players:PlayerSelector> <thm_rmt:PermissionGiveAction:Enum> <Group:String>
```

Give or remove a player group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.assign`.
- Native level: `Any`. Cheats required: false.

## permgrouptempgive

```text
/thm_rmt:permgrouptempgive <PlayerName:String> <Group:String> <Seconds:Integer>
```

Give a player a temporary group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.assign`.
- Native level: `Any`. Cheats required: false.

## permgrouptempgiveonline

```text
/thm_rmt:permgrouptempgiveonline <Players:PlayerSelector> <Group:String> <Seconds:Integer>
```

Give a player a temporary group.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.assign`.
- Native level: `Any`. Cheats required: false.

## perm

```text
/thm_rmt:perm <PlayerName:String> <thm_rmt:PermissionGiveAction:Enum> <Node:String> [thm_rmt:PermissionDecision:Enum] [Contexts:String]
```

Give or remove a personal permission node.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.players`.
- Native level: `Any`. Cheats required: false.

## permonline

```text
/thm_rmt:permonline <Players:PlayerSelector> <thm_rmt:PermissionGiveAction:Enum> <Node:String> [thm_rmt:PermissionDecision:Enum] [Contexts:String]
```

Give or remove a personal permission node.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.players`.
- Native level: `Any`. Cheats required: false.

## permtempgive

```text
/thm_rmt:permtempgive <PlayerName:String> <Node:String> <Seconds:Integer> [thm_rmt:PermissionDecision:Enum] [Contexts:String]
```

Give a temporary personal permission node.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.players`.
- Native level: `Any`. Cheats required: false.

## permtempgiveonline

```text
/thm_rmt:permtempgiveonline <Players:PlayerSelector> <Node:String> <Seconds:Integer> [thm_rmt:PermissionDecision:Enum] [Contexts:String]
```

Give a temporary personal permission node.

- Aliases: none.
- Command permission: `thm_rmt:admin.permissions.players`.
- Native level: `Any`. Cheats required: false.

## claim

```text
/thm_rmt:claim [name:String]
```

Claim your current chunk, using your existing claim when available.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## adminclaim

```text
/thm_rmt:adminclaim [name:String] [owner:String]
```

Claim your current chunk for the realm, or a recorded player using their available claim allowance.

- Aliases: none.
- Command permission: `thm_rmt:admin.claims`.
- Native level: `Any`. Cheats required: false.

## claimallowance

```text
/thm_rmt:claimallowance [player:String]
```

Show earned, bonus, used, available and lifetime automatic claim allowance.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimallowanceset

```text
/thm_rmt:claimallowanceset <player:String> <amount:Integer>
```

Set a recorded player's bonus claim allowance; existing claims must remain covered.

- Aliases: none.
- Command permission: `thm_rmt:admin.manage_players.claim_allowance`.
- Native level: `Any`. Cheats required: false.

## claimallowancegive

```text
/thm_rmt:claimallowancegive <player:String> <amount:Integer>
```

Give some of your available claim allowance to a recorded player; bonus is spent first.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimallowanceearnedset

```text
/thm_rmt:claimallowanceearnedset <player:String> <amount:Integer>
```

Set earned claim allowance without changing lifetime automatic earnings.

- Aliases: none.
- Command permission: `thm_rmt:admin.manage_players.claim_allowance`.
- Native level: `Any`. Cheats required: false.

## claimallowancegrant

```text
/thm_rmt:claimallowancegrant <player:String> <amount:Integer>
```

Grant bonus claim allowance without spending your own allowance.

- Aliases: none.
- Command permission: `thm_rmt:admin.manage_players.claim_allowance`.
- Native level: `Any`. Cheats required: false.

## claimlist

```text
/thm_rmt:claimlist [owner:String] [page:Integer]
```

List accessible claims, or use a player name/ID or admin for an owner.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claiminfo

```text
/thm_rmt:claiminfo <claimId:String> [subclaimId:String] [page:Integer]
```

Show a claim or subclaim, its trusted players, rules and options.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimchunks

```text
/thm_rmt:claimchunks <claimId:String> [subclaimId:String] [page:Integer]
```

List five chunks per page. Use - for the main claim instead of a subclaim ID.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimrename

```text
/thm_rmt:claimrename <claimId:String> <name:String>
```

Rename a claim you manage.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimdelete

```text
/thm_rmt:claimdelete <claimId:String> <confirm:Boolean>
```

Delete a claim and release its used claim allowance. Requires confirm=true.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimtransfer

```text
/thm_rmt:claimtransfer <claimId:String> <player:String> <confirm:Boolean>
```

Transfer a claim to a recorded player, keeping its ID, rules and subclaims.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimmerge

```text
/thm_rmt:claimmerge <sourceClaimId:String> <destinationClaimId:String> <confirm:Boolean>
```

Merge source land into a same-owner destination, discarding source settings. Requires confirm=true.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimtrust

```text
/thm_rmt:claimtrust <claimId:String> <thm_rmt:ClaimChange:Enum> <player:String> [subclaimId:String]
```

Add/remove a trusted player by name or ID, including recorded offline players.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimteam

```text
/thm_rmt:claimteam <claimId:String> <thm_rmt:ClaimRole:Enum> <thm_rmt:ClaimChange:Enum> <player:String>
```

Appoint/remove a claim admin or manager. Managers cannot change the team.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimchunk

```text
/thm_rmt:claimchunk <claimId:String> <thm_rmt:ClaimChange:Enum> [chunkX:Integer] [chunkZ:Integer] [dimension:String] [subclaimId:String]
```

Add/remove a chunk. X and Z are chunk coordinates; omit both to use your current chunk.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## subclaim

```text
/thm_rmt:subclaim <claimId:String> <name:String>
```

Create an empty named subclaim, then assign chunks with claimchunk.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## subclaimrename

```text
/thm_rmt:subclaimrename <claimId:String> <subclaimId:String> <name:String>
```

Rename a subclaim.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## subclaimdelete

```text
/thm_rmt:subclaimdelete <claimId:String> <subclaimId:String> <confirm:Boolean>
```

Delete a subclaim's rules without removing the parent claim's land.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimrule

```text
/thm_rmt:claimrule <claimId:String> <ruleId:String> <thm_rmt:ClaimRuleType:Enum> <allowed:Boolean> [subclaimId:String]
```

Attach/update a claim rule with a None, Trusted or All audience and allow/deny.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimruleremove

```text
/thm_rmt:claimruleremove <claimId:String> <ruleId:String> [subclaimId:String]
```

Remove an editable claim rule from a claim or subclaim.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimfilter

```text
/thm_rmt:claimfilter <claimId:String> <ruleId:String> <typeIds:String> <tags:String> <blacklist:Boolean> [subclaimId:String]
```

Set a selected rule's comma-separated type IDs and tags. Use - for an empty list.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimoption

```text
/thm_rmt:claimoption <claimId:String> <optionId:String> <enabled:Boolean> [subclaimId:String]
```

Attach/update an editable claim option.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimoptionremove

```text
/thm_rmt:claimoptionremove <claimId:String> <optionId:String> [subclaimId:String]
```

Remove an editable option from a claim or subclaim.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimcolor

```text
/thm_rmt:claimcolor <claimId:String> <red:Integer> <green:Integer> <blue:Integer>
```

Set the saved claim border color using RGB values from 0 to 255.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimwaypoint

```text
/thm_rmt:claimwaypoint <claimId:String> <waypointId:String> <name:String> [position:Location] [dimension:String]
```

Create (ID=new), rename or move a waypoint within the claim.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimwaypointstyle

```text
/thm_rmt:claimwaypointstyle <claimId:String> <waypointId:String> <enabled:Boolean> <icon:String> <red:Integer> <green:Integer> <blue:Integer>
```

Set a waypoint's visibility, icon (- to clear), and RGB color.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimwaypointremove

```text
/thm_rmt:claimwaypointremove <claimId:String> <waypointId:String>
```

Delete a saved claim waypoint.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimrules

```text
/thm_rmt:claimrules <thm_rmt:ClaimRuleKind:Enum> [page:Integer]
```

List available realm claim rule or option definitions and their IDs.

- Aliases: none.
- Command permission: `thm_rmt:command.claim`.
- Native level: `Any`. Cheats required: false.

## claimruleset

```text
/thm_rmt:claimruleset <ruleId:String> <name:String> <thm_rmt:ClaimTrigger:Enum> <thm_rmt:ClaimUsage:Enum> <thm_rmt:ClaimRuleType:Enum> <allowed:Boolean> [description:String] [applyToClaimStaff:Boolean]
```

Create (ID=new) or replace a realm claim rule; filters are edited separately.

- Aliases: none.
- Command permission: `thm_rmt:admin.claim_rules`.
- Native level: `Any`. Cheats required: false.

## claimrulefilter

```text
/thm_rmt:claimrulefilter <ruleId:String> <typeIds:String> <tags:String> <blacklist:Boolean>
```

Change a realm claim rule's comma-separated type/tag filters (- to clear).

- Aliases: none.
- Command permission: `thm_rmt:admin.claim_rules`.
- Native level: `Any`. Cheats required: false.

## claimoptionset

```text
/thm_rmt:claimoptionset <optionId:String> <name:String> <thm_rmt:ClaimUsage:Enum> <value:Boolean> [description:String]
```

Create (ID=new) or replace a realm option definition.

- Aliases: none.
- Command permission: `thm_rmt:admin.claim_rules`.
- Native level: `Any`. Cheats required: false.

## claimruledefinitionremove

```text
/thm_rmt:claimruledefinitionremove <thm_rmt:ClaimRuleKind:Enum> <ruleId:String> <confirm:Boolean>
```

Remove a realm claim rule or option definition from all claims lazily.

- Aliases: none.
- Command permission: `thm_rmt:admin.claim_rules`.
- Native level: `Any`. Cheats required: false.

## report

```text
/thm_rmt:report <playerName:String> <reason:String>
```

Report a registered player: /thm_rmt:report &lt;playerName&gt; &lt;reason&gt;. Quote text containing spaces.

- Aliases: none.
- Command permission: `thm_rmt:report`.
- Native level: `Any`. Cheats required: false.

## form

```text
/thm_rmt:form <Form ID:String> [Player:PlayerSelector]
```

Open a custom form by ID.

- Aliases: none.
- Command permission: `thm_rmt:command.form`.
- Native level: `Any`. Cheats required: false.

## mail

```text
/thm_rmt:mail <Recipient:String> <Message:String>
```

Send private mail: /thm_rmt:mail &lt;player name&gt; &lt;message&gt;. Quote names or messages containing spaces.

- Aliases: none.
- Command permission: `thm_rmt:mail.send`.
- Native level: `Any`. Cheats required: false.

## mailall

```text
/thm_rmt:mailall <Message:String>
```

Send mail to every registered player: /thm_rmt:mailall &lt;message&gt;. Quote messages containing spaces.

- Aliases: none.
- Command permission: `thm_rmt:mail.all`.
- Native level: `Any`. Cheats required: false.

## rtp

```text
/thm_rmt:rtp [Player:PlayerSelector] [Force:Boolean]
```

Randomly teleport selected players, retaining teleport safety checks.

- Aliases: none.
- Command permission: `thm_rmt:command.rtp`.
- Native level: `Any`. Cheats required: false.

## menu

```text
/thm_rmt:menu [Player:PlayerSelector]
```

Open the RMT menu for selected players.

- Aliases: none.
- Command permission: `thm_rmt:command.menu`.
- Native level: `Any`. Cheats required: false.

## tpcancel

```text
/thm_rmt:tpcancel
```

Cancel your active teleport warm-up.

- Aliases: none.
- Command permission: `thm_rmt:command.tpcancel`.
- Native level: `Any`. Cheats required: false.

## spawn

```text
/thm_rmt:spawn [Player:PlayerSelector]
```

Teleport selected players to spawn.

- Aliases: none.
- Command permission: `thm_rmt:command.spawn`.
- Native level: `Any`. Cheats required: false.

## kick

```text
/thm_rmt:kick <Player:PlayerSelector> <Reason:String>
```

Kick selected players and record the moderation action.

- Aliases: none.
- Command permission: `thm_rmt:mod.kick`.
- Native level: `Any`. Cheats required: false.

## storedcommand

```text
/thm_rmt:storedcommand <IDs:String> [Player:PlayerSelector]
```

Run comma-separated stored command IDs, optionally as selected players.

- Aliases: `thm_rmt:sc`.
- Command permission: `thm_rmt:command.storedcommand`.
- Native level: `Any`. Cheats required: false.

## storedcommandadd

```text
/thm_rmt:storedcommandadd <Command:String> [ID:String]
```

Store a command, optionally choosing its ID. Quote commands containing spaces.

- Aliases: `thm_rmt:scadd`.
- Command permission: `thm_rmt:command.storedcommandadd`.
- Native level: `Any`. Cheats required: false.

## storedcommandedit

```text
/thm_rmt:storedcommandedit <ID:String> <Command:String> [Position:Integer] [Conditional:Boolean]
```

Edit an entry (position defaults to 1). Other entries remain unchanged.

- Aliases: `thm_rmt:scedit`.
- Command permission: `thm_rmt:command.storedcommandedit`.
- Native level: `Any`. Cheats required: false.

## storedcommanddelete

```text
/thm_rmt:storedcommanddelete <ID:String>
```

Delete a stored command. References to its ID will stop working.

- Aliases: `thm_rmt:scdelete`.
- Command permission: `thm_rmt:command.storedcommanddelete`.
- Native level: `Any`. Cheats required: false.

## storedcommandlist

```text
/thm_rmt:storedcommandlist [Page:Integer]
```

List stored command IDs, five per page.

- Aliases: `thm_rmt:sclist`.
- Command permission: `thm_rmt:command.storedcommandlist`.
- Native level: `Any`. Cheats required: false.

## storedcommandview

```text
/thm_rmt:storedcommandview <ID:String> [Position:Integer]
```

View a stored-command entry by position (defaults to 1).

- Aliases: `thm_rmt:scview`.
- Command permission: `thm_rmt:command.storedcommandview`.
- Native level: `Any`. Cheats required: false.

## storedcommandappend

```text
/thm_rmt:storedcommandappend <ID:String> <Command:String> [Conditional:Boolean]
```

Append a command to an existing stored-command sequence.

- Aliases: `thm_rmt:scappend`.
- Command permission: `thm_rmt:command.storedcommandedit`.
- Native level: `Any`. Cheats required: false.

## storedcommandremove

```text
/thm_rmt:storedcommandremove <ID:String> <Position:Integer>
```

Remove one entry by position. Use storedcommanddelete to delete the whole sequence.

- Aliases: `thm_rmt:scremove`.
- Command permission: `thm_rmt:command.storedcommandedit`.
- Native level: `Any`. Cheats required: false.

## storedcommandmove

```text
/thm_rmt:storedcommandmove <ID:String> <From:Integer> <To:Integer>
```

Move an entry from one position to another in its stored-command sequence.

- Aliases: `thm_rmt:scmove`.
- Command permission: `thm_rmt:command.storedcommandedit`.
- Native level: `Any`. Cheats required: false.

## storedcommandconditional

```text
/thm_rmt:storedcommandconditional <ID:String> <Position:Integer> <Conditional:Boolean>
```

Choose whether an entry requires the preceding entry to succeed.

- Aliases: `thm_rmt:scconditional`.
- Command permission: `thm_rmt:command.storedcommandedit`.
- Native level: `Any`. Cheats required: false.

## ban

```text
/thm_rmt:ban <Player:PlayerSelector> <Reason:String> [Days:Integer] [Hours:Integer] [Minutes:Integer]
```

Ban selected players with an optional duration.

- Aliases: none.
- Command permission: `thm_rmt:mod.ban`.
- Native level: `Any`. Cheats required: false.

## banoffline

```text
/thm_rmt:banoffline <Player Name:String> <Reason:String> [Days:Integer] [Hours:Integer] [Minutes:Integer]
```

Ban a registered player by name, including offline players, with an optional duration.

- Aliases: none.
- Command permission: `thm_rmt:mod.ban_offline`.
- Native level: `Any`. Cheats required: false.

## announce

```text
/thm_rmt:announce <Message:String>
```

Broadcast a message: /thm_rmt:announce "message". Supports placeholders for the command sender.

- Aliases: none.
- Command permission: `thm_rmt:command.announce`.
- Native level: `Any`. Cheats required: false.

## spawnxp

```text
/thm_rmt:spawnxp <amount:Integer> <position:Location> [dimensionID:String]
```

Spawn an experience orb containing 1 to 12000 XP at a loaded location.

- Aliases: none.
- Command permission: `thm_rmt:command.spawnxp`.
- Native level: `Any`. Cheats required: false.

## fakenoop

```text
/thm_rmt:fakenoop
```

Toggles fake non OP status, making it so you are treated as a non OP for testing purposes.

- Aliases: none.
- Command permission: `thm_rmt:command.fakenoop`.
- Native level: `Admin`. Cheats required: false.

## gms

```text
/thm_rmt:gms [Player:PlayerSelector]
```

Set a player's gamemode to survival.

- Aliases: none.
- Command permission: `thm_rmt:command.gms`.
- Native level: `Any`. Cheats required: false.

## gma

```text
/thm_rmt:gma [Player:PlayerSelector]
```

Set a player's gamemode to adventure.

- Aliases: none.
- Command permission: `thm_rmt:command.gma`.
- Native level: `Any`. Cheats required: false.

## gmsp

```text
/thm_rmt:gmsp [Player:PlayerSelector]
```

Set a player's gamemode to spectator.

- Aliases: none.
- Command permission: `thm_rmt:command.gmsp`.
- Native level: `Any`. Cheats required: false.

## gmc

```text
/thm_rmt:gmc [Player:PlayerSelector]
```

Set a player's gamemode to creative.

- Aliases: none.
- Command permission: `thm_rmt:command.gmc`.
- Native level: `Any`. Cheats required: false.

## Registered Enums

### thm_rmt:SortTarget

`block`, `entity`, `self`

### thm_rmt:PlayerCommandState

`on`, `off`

### thm_rmt:SpyMode

`spectator`, `creative`

### thm_rmt:TeleportRequestType

`tpa`, `tphere`

### thm_rmt:ModerationWhitelistAction

`add`, `remove`, `list`

### thm_rmt:LootSlot

`slot.inventory`, `slot.hotbar`, `slot.container`, `slot.weapon.mainhand`, `slot.weapon.offhand`, `slot.armor.head`, `slot.armor.chest`, `slot.armor.legs`, `slot.armor.feet`

### thm_rmt:PvPState

`on`, `off`

### thm_rmt:WaypointScope

`player`, `world`, `team`

### thm_rmt:WaypointIcon

`circle`, `cross`, `cube`, `flag`, `plus`, `point`, `square`

### thm_rmt:MetaDataScope

`world`, `player`

### thm_rmt:PermissionDecision

`allow`, `deny`

### thm_rmt:PermissionNodeAction

`add`, `remove`

### thm_rmt:PermissionGiveAction

`give`, `remove`

### thm_rmt:ClaimChange

`add`, `remove`

### thm_rmt:ClaimRole

`admin`, `manager`

### thm_rmt:ClaimRuleType

`none`, `trusted`, `all`, `team`

### thm_rmt:ClaimUsage

`default`, `forced`, `optional`

### thm_rmt:ClaimRuleKind

`rule`, `option`

### thm_rmt:ClaimTrigger

`enter`, `build`, `break`, `use_item`, `use_item_on`, `interact_block`, `interact_entity`, `tame_entity`, `attack_entity`, `attack_tamed_entity`, `set_home`, `set_warp`

### thm_rmt:TPA_Option

`Send`, `Accept`, `Deny`, `Requests`

### thm_rmt:Menu_Options

`Claim`, `Commands`, `Homes`, `Warps`, `Player Warps`

### thm_rmt:KitEditorAction

`create`, `edit`, `load`, `save`, `delete`, `list`

### thm_rmt:KitAction

`claim`, `list`
