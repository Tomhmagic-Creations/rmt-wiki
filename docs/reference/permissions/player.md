---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Player feature permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:feature.door.knock

**Knock on Doors**

Play a knocking sound when hitting a vanilla door. Does not open the door or bypass its lock.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.door.double

**Open Double Doors**

Open or close the matching half of a vanilla double door when interacting. Both doors must allow interaction, including locks and claim rules.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.sort.block

**Sort Block Container**

Sort block inventories using the Chest Sorter or sort commands. Block interaction permissions, locks and claim rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.sort.entity

**Sort Entity Container**

Sort non-player entity inventories using the Chest Sorter or sort commands. Entity interaction permissions and claim rules still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.sort.player

**Sort Player Inventory**

Sort player inventory slots 9 onward. Never changes hotbar slots 0-8. Sorting other players requires the sortentity management command permission.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:store.use

**Use Realm Store**

Browse the realm store and buy products using items, scoreboard scores or redemption codes. Does not bypass payment.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:menu.favorites

**Personal Menu Favorites**

Save, reorder and use personal menu shortcuts. Every destination still requires its own permissions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:portals.use

**Enter Portals**

Activate portals by walking into them. Existing RTP, spawn and command permissions still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:crates.open

**Open Crates**

Open assigned crate blocks. Payment, cooldowns and per-player claim limits still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:kits

**Browse and Claim Kits**

Open the kits menu and redeem eligible kits. Also requires access to the individual kit.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:kit

**Kit Access**

Access a specific kit with kit=(kitID), or all kits with the base node. Does not bypass group restrictions, cooldowns or redemption limits.

Data Type | Scope
--- | ---
string | global

## thm_rmt:waypoints

**View Waypoints**

View permitted locator-bar waypoints and manage your hidden or pinned markers.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.create

**Create Personal Waypoints**

Create up to 64 personal waypoints.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.edit

**Edit Personal Waypoints**

Change your personal waypoint locations, styles, distance limits and priorities.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.delete

**Delete Personal Waypoints**

Delete your personal waypoints.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.death

**Latest Death Waypoint**

See a marker for your latest actual death, independent of death-back teleport history.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.spawn

**Spawn Waypoint**

See the normal spawn marker when enabled by the realm. Never uses first spawn.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.team

**View Team Waypoints**

See waypoints belonging to your current team.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.team.manage

**Manage Team Waypoints**

Manage team waypoints while a team owner/admin, or with realm team-management access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.claim

**View Claim Waypoints**

See saved claim waypoints when owner, trusted, claim staff, teammate of the owner, or a realm claim administrator.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:waypoints.access

**Restricted Realm Waypoints**

View permission-only realm waypoints using waypoints.access=(waypoint ID). Also requires View Waypoints.

Data Type | Scope
--- | ---
string | global

## thm_rmt:worldborder.bypass

**Bypass World Borders**

Move and perform player actions outside world borders. Border particles remain visible. Supports dimension/location contexts; does not bypass claims or other permissions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:team

**Teams**

Open the teams menu, join or leave teams and accept invitations. One team per player.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:team.create

**Create Teams**

Create a team. Also requires Teams access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:team.home

**Team Home**

Teleport to your team's saved home. Team membership and dimension entry are rechecked before teleporting.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:team.warps

**Use Team Warps**

View and teleport to your team's shared warps. Requires Teams access and current membership; destination contexts apply when teleporting.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:team.warps.manage

**Manage Team Warps**

Create, rename, relocate and delete team-owned warps. Also requires Teams access and team owner/admin status.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:nameplate.preset

**Nameplate Preset**

Choose a shared preset, for example nameplate.preset=(moderator). Missing, denied or wildcard selections use the realm default.

Data Type | Scope
--- | ---
string | global

## thm_rmt:stats.view

**View Profile Stats**

View visible statistics in your profile.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:teleport.delay

**Teleport Delay**

Teleport warmup in whole seconds (0-86400). Missing, denied or invalid values use 5 seconds; a wildcard skips the warmup.

Data Type | Scope
--- | ---
number | global

## thm_rmt:mail.cooldown

**Mail Cooldown**

Whole seconds between outgoing letters or broadcasts, clamped to 5-300 seconds. Missing, denied or invalid values use 30 seconds; a wildcard uses 5 seconds. Duplicate protection still applies.

Data Type | Scope
--- | ---
number | global

## thm_rmt:mail

**Mail Access**

Open your inbox, read and delete mail, and manage blocked senders. Does not grant sending.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mail.send

**Send Mail**

Send private mail to registered players, including offline players. Also requires Mail Access.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mail.all

**Mail All Players**

Send mail to every registered player except yourself. Also requires Mail Access and Send Mail; recipient blocks still apply.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:mail.block_bypass

**Mail Block Bypass**

Deliver mail even when the recipient has blocked you. Does not bypass cooldowns, duplicate checks or inbox limits.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:announcement

**Receive Announcements**

Receive permission-only announcements. Use announcement=(announcement ID), or a wildcard for all.

Data Type | Scope
--- | ---
string | global

## thm_rmt:build

**Build**

Allows the player to build in the world. Able to filter by block type, for example build=(minecraft:stone)

Data Type | Scope
--- | ---
string | global

## thm_rmt:break

**Break**

Allows the player to break blocks in the world. Able to filter by block type, for example break=(minecraft:stone)

Data Type | Scope
--- | ---
string | global

## thm_rmt:interact.block

**Interact with Blocks**

Allows the player to interact with blocks in the world. Able to filter by block type, for example interact.block=(minecraft:stone)

Data Type | Scope
--- | ---
string | global

## thm_rmt:interact.entity

**Interact with Entities**

Allows the player to interact with entities in the world. Able to filter by entity type, for example interact.entity=(minecraft:cow)

Data Type | Scope
--- | ---
string | global

## thm_rmt:use

**Use**

Allows the player to use items in the world. Able to filter by item type, for example use=(minecraft:stick)

Data Type | Scope
--- | ---
string | global

## thm_rmt:use_on

**Use On**

Allows the player to use items on blocks in the world. Able to filter by block type, for example use_on=(minecraft:stone)

Data Type | Scope
--- | ---
string | global

## thm_rmt:prefix

**Nameplate Prefix**

Sets the prefix shown before a player's nameplate. Example prefix=(Admin)

Data Type | Scope
--- | ---
string | global

## thm_rmt:suffix

**Nameplate Suffix**

Sets the suffix shown after a player's nameplate. Example suffix=(Member)

Data Type | Scope
--- | ---
string | global

## thm_rmt:feature.spawn

**Spawn Feature**

Allows the player to use the spawn feature. Required separately to the /spawn command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.warps

**Warps Feature**

Allows the player to use the warps feature. Required separately to the /warps command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:warp

**Warp Access**

Allows access to a specific warp. Example warp=(spawn)

Data Type | Scope
--- | ---
string | global

## thm_rmt:feature.player_warps

**Player Warps Feature**

Allows the player to use the player warps feature. Required separately to the /playerwarps command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.tpa

**TPA Feature**

Allows the player to use the TPA feature. Required separately to the /tpa command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.tpahere

**TPA Here Feature**

Allows the player to use the TPA Here feature. Required separately to the /tpahere command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.rtp

**RTP Feature**

Allows the player to use the RTP feature. Required separately to the /rtp command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.back

**Back Feature**

Allows the player to use the back feature. Required separately to the /back command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.death_back

**Death Back Feature**

Allows the player to use the death back feature. Required separately to the /dback command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.home

**Home Feature**

Allows the player to use the home feature. Required separately to the /home command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:feature.bed_home

**Bed Home Feature**

Allows the player to use the bed home feature. Required separately to the /bed command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:homes.max

**Max Homes**

Sets the maximum number of homes a player can create. Example homes.max=(5)

Data Type | Scope
--- | ---
number | global

## thm_rmt:player_warps.max

**Max Player Warps**

Sets the maximum number of player warps a player can create. Example player_warps.max=(5)

Data Type | Scope
--- | ---
number | global

## thm_rmt:feature.container_lock

**Container Lock Feature**

Allows the player to use the container lock feature. Required separately to the /lock command permission node.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:hologram

**Create Hologram**

Allows the player to create holograms.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:hologram.max

**Max Holograms**

Sets the maximum number of holograms a player can create. Example hologram.max=(5)

Data Type | Scope
--- | ---
number | global

## thm_rmt:hologram.radius

**Hologram Radius**

Radius in blocks for the nearby hologram cap. Example hologram.radius=(30). Missing, denied, invalid or wildcard values use 30 blocks.

Data Type | Scope
--- | ---
number | global

## thm_rmt:hologram.limit

**Hologram Limit**

Sets the maximum number of holograms a player can place in the radius. Example hologram.limit=(5)

Data Type | Scope
--- | ---
number | global

## thm_rmt:rtp.radius

**RTP Radius**

RTP search radius in blocks, capped at 1000000. Example rtp.radius=(1000). Missing, denied or invalid values use 0; wildcard uses 1000.

Data Type | Scope
--- | ---
number | global

## thm_rmt:rtp.cooldown

**RTP Cooldown**

RTP cooldown in whole seconds, capped at 86400. Example rtp.cooldown=(20). Missing, denied or invalid values use 60; wildcard uses 0.

Data Type | Scope
--- | ---
number | global

## thm_rmt:dimension_enter

**Enter Dimension**

Entry is allowed unless a matching permission denies it. Deny dimension_enter=(minecraft:nether) to restrict entry. Higher-priority allows override lower-priority denies; equal-priority deny wins.

Data Type | Scope
--- | ---
string | global

## thm_rmt:portal_activate

**Activate Portal**

Allows player portal activation for a destination: minecraft:nether or minecraft:the_end. Does not control travel through existing portals.

Data Type | Scope
--- | ---
string | global

## thm_rmt:rtp.dimension

**RTP Dimension**

Allows the player to use RTP in a specific dimension. Example rtp.dimension=(minecraft:overworld)

Data Type | Scope
--- | ---
string | global

## thm_rmt:afk.bypass

**Bypass AFK Restrictions**

Allows the player to bypass AFK restrictions.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:purge.bypass

**Purge Bypass**

Allows the player to bypass data purges.

Data Type | Scope
--- | ---
allow/deny | global
