---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Command permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:command.impulse

**impulse Command**

Add an impulse vector to selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.clearvelocity

**clearvelocity Command**

Clear selected entities' current motion.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entityremove

**entityremove Command**

Remove non-player, non-RMT entities without death or loot.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.ignite

**ignite Command**

Set selected entities on fire for a duration in seconds.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.extinguish

**extinguish Command**

Extinguish selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.explosion

**explosion Command**

Create configurable explosions with optional block damage, fire and underwater operation.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.itemname

**itemname Command**

Change the name of an existing item in a selected entity's inventory/equipment.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.itemlore

**itemlore Command**

Change the lore of an existing item in a selected entity's inventory/equipment.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.itemdurability

**itemdurability Command**

Set an existing item's remaining durability percentage.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.particleplayer

**particleplayer Command**

Spawn particles visible only to selected players, with optional numeric Molang variables.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.blockinfo

**blockinfo Command**

Inspect a loaded block's states, tags, components, light and redstone power.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entityinfo

**entityinfo Command**

Inspect entity identity, health, motion, tags and components, excluding private dynamic properties.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatastring

**entitymetadatastring Command**

Set string metadata on selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatastringget

**entitymetadatastringget Command**

Read string metadata from selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatabool

**entitymetadatabool Command**

Set boolean metadata on selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadataboolget

**entitymetadataboolget Command**

Read boolean metadata from selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatanumber

**entitymetadatanumber Command**

Set numeric metadata on selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatanumberget

**entitymetadatanumberget Command**

Read numeric metadata from selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatavector

**entitymetadatavector Command**

Set vector metadata on selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatavectorget

**entitymetadatavectorget Command**

Read vector metadata from selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadatalist

**entitymetadatalist Command**

List metadata keys on selected entities without exposing other dynamic properties.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.entitymetadataremove

**entitymetadataremove Command**

Remove a metadata key from selected entities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.sort

**Sort Command**

Use /sort block, entity or self. Each mode also requires its own sort feature permission. Looked-at player inventories are not targeted.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.sortblock

**Sort Block Command**

Use /sortblock at a loaded location and optional dimension. Also requires Sort Block Container and applicable interaction, lock and claim access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.sortentity

**Sort Entity Command**

Sort explicit entity targets, including players. Requires the entity or player sort feature permission for each target. Player hotbars are never changed.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.store

**Store Command**

Open the realm store using /store. Also requires Use Realm Store.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.storecategory

**Store Category Command**

Open a particular store category using /storecategory. Also requires Use Realm Store.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.storeproduct

**Store Product Command**

Open a particular store product using /storeproduct. Also requires Use Realm Store.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpcancel

**Cancel Teleport Command**

Cancel your own active teleport warm-up using /tpcancel.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.spawn

**Spawn Command**

Teleport to spawn using /spawn. Spawn feature access and teleport checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.rtp

**RTP Command**

Use /rtp for random teleportation. RTP feature access, dimension permissions, radius, cooldown and safety checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.gms

**Survival Command**

Use /gms to change your game mode to Survival. Explicit selectors additionally require Manage Player Game Modes.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.gmc

**Creative Command**

Use /gmc to change your game mode to Creative. Explicit selectors additionally require Manage Player Game Modes.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.gma

**Adventure Command**

Use /gma to change your game mode to Adventure. Explicit selectors additionally require Manage Player Game Modes.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.gmsp

**Spectator Command**

Use /gmsp to change your game mode to Spectator. Explicit selectors additionally require Manage Player Game Modes.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpa

**TPA Request Command**

Send a teleport request using /tpa. TPA access and the recipient's request preferences still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpahere

**TPHERE Request Command**

Ask a player to teleport to you using /tpahere. TPHERE access and recipient preferences still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpaccept

**Accept Teleport Requests**

Accept an existing TPA or TPHERE request using /tpaccept. Does not bypass request permissions or preferences.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpdeny

**Deny Teleport Requests**

Deny incoming TPA or TPHERE requests using /tpdeny.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tpacancel

**Cancel Teleport Requests**

Cancel your outgoing requests using /tpacancel or /tpc. Does not cancel an already accepted teleport warm-up; use /tpcancel for that.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.back

**Back Command**

Return to your saved teleport history using /back. Back access and teleport checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.deathback

**Death Back Command**

Return to your saved death location using /deathback. Death Back access and teleport checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.home

**Home Command**

Teleport to one of your saved homes using /home. Home access and teleport checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.homes

**List Homes Command**

List your saved homes using /homes. Also requires Home access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.sethome

**Set Home Command**

Save your current position using /sethome. Home allowance, existing names, claim rules and Home access still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.delhome

**Delete Home Command**

Delete one of your saved homes using /delhome. Also requires Home access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.warp

**Warp Command**

Travel to a realm warp using /warp. Individual warp permissions and teleport checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.warp.player

**Warp Player Selector**

Use /warp with an explicit player selector. Recipients still need access to the warp.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.warps

**List Warps Command**

List realm warps you may use. Hidden or inaccessible warps are omitted.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.playerwarp

**Player Warp Command**

Travel to a player's shared warp using /playerwarp or /pwarp. Warp access and team sharing rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.playerwarp.player

**Player Warp Selector**

Use /playerwarp or /pwarp with explicit player targets. Recipient feature and sharing restrictions still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.teamhome

**Team Home Command**

Use /teamhome to travel to your team's home. Team membership and Team Home access are still required.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.teamsethome

**Set Team Home Command**

Use /teamsethome to place your team's home. Requires team management access and obeys claim rules.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.teamwarp

**Team Warp Command**

Use /teamwarp with a warp ID or exact name. Requires current team membership and Team Warps access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.chunks

**Chunk Viewer Command**

Use /chunks on or off. Also requires the Personal Chunk Viewer setting permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.claimborders

**Claim Borders Command**

Use /claimborders on or off. Also requires the Personal Claim Borders setting permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.stats

**Stats Command**

View visible stats using /stats. Also requires View Profile Stats.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.stats.player

**Read Other Player Stats**

Read another registered player's visible stats using /stats, including offline players. Does not expose hidden stats.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.warn

**Warn Command**

Warn a registered player using /warn. Also requires the moderation Warn permission and respects protected targets.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.unban

**Unban Command**

End a registered player's active ban using /unban without deleting history. Also requires Unban permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.punishments

**Punishment History Command**

Read a registered player's moderation history using /punishments. Also requires View Punishments permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.invsee

**Inventory Viewer Command**

Open /invsee for an online or saved-offline inventory. The existing inventory view, edit, take and clear permissions still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.heal

**Heal Command**

Use /heal to restore health. Also requires the existing Heal Players permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.heal.player

**Heal Player Selector**

Use /heal with explicit player targets. Also requires Heal Command and Heal Players access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.feed

**Feed Command**

Use /feed to restore hunger. Also requires the existing Feed Players permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.feed.player

**Feed Player Selector**

Use /feed with explicit player targets. Also requires Feed Command and Feed Players access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.spy

**Spy Command**

Use /spy on or off for yourself. Also requires Spy permission; creative-mode behavior follows the existing spy permissions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.rmtwhitelist

**RMT Whitelist Command**

Manage RMT's saved whitelist using /rmtwhitelist add, remove or list. Also requires RMT whitelist management permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.customlootspawn

**Spawn Custom Loot**

Generate and spawn custom loot at a loaded location.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.customlootgive

**Give Custom Loot**

Generate loot for selected entities and drop inventory overflow at their location.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.customlootblock

**Insert Custom Loot**

Insert loot into a block container without overwriting existing items, dropping overflow.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.customlootreplace

**Replace Entity Slots With Loot**

Overwrite consecutive entity slots with generated loot. Count is a slot count, not an item quantity.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.customlootreplaceblock

**Replace Block Slots With Loot**

Overwrite consecutive block-container slots with generated loot. Count is a slot count, not an item quantity.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.kit

**Kit Command**

Use /kit to browse, list or claim kits. Claiming still requires kit access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.kiteditor

**Kit Editor Command**

Use /kiteditor. Each action also requires its corresponding kit management permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.givekit

**Give Kit Command**

Use /givekit with a player selector. Also requires Give Kits for player callers.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.pvp

**Personal PvP Toggle**

Use /pvp to opt into or out of player combat in Toggle or Team and Toggle mode. Does not bypass the realm's PvP mode, claims or team friendly-fire rules.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.waypoint

**Waypoint Commands**

Use waypoint commands. Scope ownership and create/edit/delete permissions are also enforced.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.waypoint.player

**Other Player Waypoints**

Use waypoint commands for another selected online player. Personal create/edit/delete permissions are still required.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.worldborder.get

**Read World Borders**

Read a dimension's configured border using /worldborderget.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.worldborder.set

**Change World Borders**

Set, resize, disable or move a dimension's border using world-border commands.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.teammsg

**Team Chat**

Use /teammsg to send a message to online teammates. Also requires Teams access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadata.player

**Other Player Metadata**

Access another player's metadata through metadata commands or the Technical editor.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatastring.get

**Read String Metadata**

Read string metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatastring.set

**Write String Metadata**

Set string metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatabool.get

**Read Boolean Metadata**

Read boolean metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatabool.set

**Write Boolean Metadata**

Set boolean metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatanumber.get

**Read Number Metadata**

Read numeric metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatanumber.set

**Write Number Metadata**

Set numeric metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatavector.get

**Read Vector Metadata**

Read vector metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.metadatavector.set

**Write Vector Metadata**

Set vector metadata with a command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.announce

**Announce**

Broadcast a placeholder message to every online player using /thm_rmt:announce.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.spawnxp

**Spawn XP**

Spawn an experience orb containing 1 to 12000 XP at a loaded location using /thm_rmt:spawnxp.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.menu

**Menu Command**

Open your RMT menu using the menu command.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.tool

**Realm Tool Command**

Request a Realm Tool for yourself without duplicating a carried tool. Requires inventory space. Separate from automatic first-join giving in General settings. Fresh setup grants this to Default; existing V2 groups are not automatically updated.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.menu.player

**Open Other Players' Menus**

Use the menu command with a player selector.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.spawn.player

**Send Players to Spawn**

Use the spawn command with a player selector.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.rtp.player

**RTP Other Players**

Use the RTP command with a player selector.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.rtp.force

**Force Immediate RTP**

Use /rtp &lt;players&gt; true to skip the movement-cancellable teleport warm-up. Target RTP permissions, cooldowns and safe-destination checks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.claim

**Claim Commands**

Allows claim commands. Editing still requires ownership, delegated access or a realm administration permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:command.form

**Form Command**

Open custom forms with /form without a player selector. Use command.form=(formID) for individual forms, or the base node for all forms. Separate form access is still required.

Data Type | Scope
--- | ---
string | global

## thm_rmt:command.form.player

**Form Command Player Selector**

Open custom forms using the /form player selector instead of needing command.form data permission. Separate form access is still required.

Data Type | Scope
--- | ---
allow/deny | global
