---
description: "Exact placeholder reference for the current documented V2 build. Use the feature guides for setup and examples."
---

# 📋 Placeholder reference

Exact placeholder reference for the current documented V2 build. Use the feature guides for setup and examples.




All 90 built-in definitions. External definitions are runtime-only. Missing context can return no value even with valid syntax. See DynamicText for usage and privacy.

## thm_rmt:entity_metadata

Read entity-owned metadata from the context non-player entity. Missing keys/context are unavailable. Vector components return numbers; player metadata remains separate.

- Return: `string\|number\|boolean\|vector3`.
- Examples: `%thm_rmt:entity_metadata(example)%`.

## thm_rmt:entity_metadata_x

Read entity-owned metadata from the context non-player entity. Missing keys/context are unavailable. Vector components return numbers; player metadata remains separate.

- Return: `number`.
- Examples: `%thm_rmt:entity_metadata_x(checkpoint)%`.

## thm_rmt:entity_metadata_y

Read entity-owned metadata from the context non-player entity. Missing keys/context are unavailable. Vector components return numbers; player metadata remains separate.

- Return: `number`.
- Examples: `%thm_rmt:entity_metadata_y(checkpoint)%`.

## thm_rmt:entity_metadata_z

Read entity-owned metadata from the context non-player entity. Missing keys/context are unavailable. Vector components return numbers; player metadata remains separate.

- Return: `number`.
- Examples: `%thm_rmt:entity_metadata_z(checkpoint)%`.

## thm_rmt:team_name

Read a team's name by permanent team ID. Without an ID, use the context player's team. Renaming a team does not change its ID.

- Return: `string`.
- Examples: `%thm_rmt:team_name(team_1)%`, `%thm_rmt:team_name%`.

## thm_rmt:team_size

Read a team's member count by permanent team ID. Without an ID, use the context player's team. Players being purged are not counted.

- Return: `number`.
- Examples: `%thm_rmt:team_size(team_1)%`, `%thm_rmt:team_size%`.

## thm_rmt:player_team_name

Read the player's team name. An optional player ID allows offline access. Players without a team return empty text.

- Return: `string`.
- Examples: `%thm_rmt:player_team_name%`, `%thm_rmt:player_team_name(-4294967295)%`.

## thm_rmt:player_team_id

Read the player's permanent team ID. An optional player ID allows offline access. Players without a team return empty text.

- Return: `string`.
- Examples: `%thm_rmt:player_team_id%`, `%thm_rmt:player_team_id(-4294967295)%`.

## thm_rmt:player_team_size

Read the player's team member count. An optional player ID allows offline access. Players without a team return zero.

- Return: `number`.
- Examples: `%thm_rmt:player_team_size%`, `%thm_rmt:player_team_size(-4294967295)%`.

## thm_rmt:world_metadata

Read world metadata by key, retaining its original value type. Add x, y or z to read one vector component. Missing keys are unavailable.

- Return: `string\|number\|boolean\|vector3`.
- Examples: `%thm_rmt:world_metadata(example)%`, `%thm_rmt:world_metadata(checkpoint,x)%`.

## thm_rmt:world_metadata_x

Read the x component of a world metadata vector as a number. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:world_metadata_x(checkpoint)%`.

## thm_rmt:world_metadata_y

Read the y component of a world metadata vector as a number. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:world_metadata_y(checkpoint)%`.

## thm_rmt:world_metadata_z

Read the z component of a world metadata vector as a number. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:world_metadata_z(checkpoint)%`.

## thm_rmt:player_metadata

Read player metadata by key, retaining its original value type. An optional player ID after the key selects a recorded player, including offline players. Without an ID, uses the context player. Use _x, _y or _z for vector components. Missing keys are unavailable.

- Return: `string\|number\|boolean\|vector3`.
- Examples: `%thm_rmt:player_metadata(example)%`, `%thm_rmt:player_metadata(example,-4294967295)%`.

## thm_rmt:player_metadata_x

Read the x component of a player metadata vector as a number. An optional player ID after the key selects a recorded player, including offline players. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:player_metadata_x(checkpoint)%`, `%thm_rmt:player_metadata_x(checkpoint,-4294967295)%`.

## thm_rmt:player_metadata_y

Read the y component of a player metadata vector as a number. An optional player ID after the key selects a recorded player, including offline players. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:player_metadata_y(checkpoint)%`, `%thm_rmt:player_metadata_y(checkpoint,-4294967295)%`.

## thm_rmt:player_metadata_z

Read the z component of a player metadata vector as a number. An optional player ID after the key selects a recorded player, including offline players. Missing keys are unavailable.

- Return: `number`.
- Examples: `%thm_rmt:player_metadata_z(checkpoint)%`, `%thm_rmt:player_metadata_z(checkpoint,-4294967295)%`.

## thm_rmt:nameplate_prefix

Read the subject player's permission-based nameplate prefix. Available in nameplate templates; empty outside that context.

- Return: `string`.
- Examples: `%thm_rmt:nameplate_prefix%`.

## thm_rmt:nameplate_suffix

Read the subject player's permission-based nameplate suffix. Available in nameplate templates; empty outside that context.

- Return: `string`.
- Examples: `%thm_rmt:nameplate_suffix%`.

## thm_rmt:nameplate_afk

Optional AFK marker in a nameplate template. Empty when the subject is active.

- Return: `string`.
- Examples: `%thm_rmt:nameplate_afk%`.

## thm_rmt:player_stat

The selected player's world-stored statistic. Use its stable stat ID. Deleted or unknown stats are unavailable, not zero. Playtime is in seconds.

- Return: `number`.
- Examples: `%thm_rmt:player_stat(kills)%`, `%thm_rmt:player_stat(monster_kills)%`, `%thm_rmt:player_stat(deaths)%`, `%thm_rmt:player_stat(playtime)%`, `%thm_rmt:player_stat(zombie_kills)%`.

## thm_rmt:player_kills

The player's lifetime player-kill count recorded by RMT. This is not a rolling time-window count.

- Return: `number`.
- Examples: `%thm_rmt:player_kills%`.

## thm_rmt:event

A captured field from the Minecraft event running this stored command. Field names are case-sensitive; use the Events editor's field list. Missing fields fail command resolution. The optional json argument quotes text for JSON.

- Return: `string`.
- Examples: `%thm_rmt:event(hurtEntity.typeId)%`, `%thm_rmt:event(damageSource.damagingEntity.name)%`, `%thm_rmt:event(brokenBlockPermutation.type.id)%`, `%thm_rmt:event(player.name,json)%`.

## thm_rmt:player_name

The player's current name.

- Return: `string`.
- Examples: `%thm_rmt:player_name%`.

## thm_rmt:player_id

The player's entity id.

- Return: `string`.
- Examples: `%thm_rmt:player_id%`.

## thm_rmt:player_level

The player's current level.

- Return: `number`.
- Examples: `%thm_rmt:player_level%`.

## thm_rmt:player_xp

The player's current XP.

- Return: `number`.
- Examples: `%thm_rmt:player_xp%`.

## thm_rmt:player_xp_next

The player's total XP needed for the next level.

- Return: `number`.
- Examples: `%thm_rmt:player_xp_next%`.

## thm_rmt:player_xp_progress

The player's XP earned at the current level.

- Return: `number`.
- Examples: `%thm_rmt:player_xp_progress%`.

## thm_rmt:player_is_op

Whether the player is an operator or not.

- Return: `boolean`.
- Examples: `%thm_rmt:player_is_op%`.

## thm_rmt:player_perm_level

The player's current permission level. Returns Visitor, Member, Operator, or Custom.

- Return: `string`.
- Examples: `%thm_rmt:player_perm_level%`.

## thm_rmt:player_selected_slot

The player's currently selected slot index.

- Return: `number`.
- Examples: `%thm_rmt:player_selected_slot%`.

## thm_rmt:player_platform

The player's platform. Returns Console, Mobile, or Desktop.

- Return: `string`.
- Examples: `%thm_rmt:player_platform%`.

## thm_rmt:player_graphics

The player's graphics mode. Returns Deferred, Fancy, RayTraced or Simple

- Return: `string`.
- Examples: `%thm_rmt:player_graphics%`.

## thm_rmt:player_input_perm

Checks if a specific permission category is enabled for the player. Allowed categories: Camera, Movement, LateralMovement, Sneak, Jump, Mount, Dismount, MoveForward, MoveBackward, MoveLeft, MoveRight. Usage: %thm_rmt:player_input_perm(category)%

- Return: `boolean`.
- Examples: `%thm_rmt:player_input_perm(Movement)%`.

## thm_rmt:player_dimension

The player's current dimension id.

- Return: `string`.
- Examples: `%thm_rmt:player_dimension%`.

## thm_rmt:player_gamemode

The player's current gamemode.

- Return: `string`.
- Examples: `%thm_rmt:player_gamemode%`.

## thm_rmt:player_spawn_dimension

The player's current spawn point dimension.

- Return: `string`.
- Examples: `%thm_rmt:player_spawn_dimension%`.

## thm_rmt:player_spawn_location

The player's current spawn point location. Optional args: x, y, z, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector3\|number`.
- Examples: `%thm_rmt:player_spawn_location%`, `%thm_rmt:player_spawn_location(x)%`, `%thm_rmt:player_spawn_location(floor)%`, `%thm_rmt:player_spawn_location(y,round)%`.

## thm_rmt:player_death_location

The player's last death location. Optional args: x, y, z, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector3\|number`.
- Examples: `%thm_rmt:player_death_location%`, `%thm_rmt:player_death_location(x)%`, `%thm_rmt:player_death_location(floor)%`, `%thm_rmt:player_death_location(y,round)%`.

## thm_rmt:player_death_dimension

The player's last death dimension.

- Return: `string`.
- Examples: `%thm_rmt:player_death_dimension%`.

## thm_rmt:player_back_location

The player's last back location. Optional args: x, y, z, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector3\|number`.
- Examples: `%thm_rmt:player_back_location%`, `%thm_rmt:player_back_location(x)%`, `%thm_rmt:player_back_location(floor)%`, `%thm_rmt:player_back_location(y,round)%`.

## thm_rmt:player_back_dimension

The player's last back dimension.

- Return: `string`.
- Examples: `%thm_rmt:player_back_dimension%`.

## thm_rmt:player_equip_name

The player's current armor name for a given slot. Accepted slots: head, chest, legs, feet, mainhand, offhand. Usage: %thm_rmt:player_equip_name(slot)%

- Return: `string`.
- Examples: `%thm_rmt:player_equip_name(head)%`.

## thm_rmt:player_equip_amount

The player's current armor amount for a given slot. Accepted slots: head, chest, legs, feet, mainhand, offhand. Usage: %thm_rmt:player_equip_amount(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_equip_amount(mainhand)%`.

## thm_rmt:player_equip_durability

The player's current armor durability for a given slot. Accepted slots: head, chest, legs, feet, mainhand, offhand. Usage: %thm_rmt:player_equip_durability(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_equip_durability(mainhand)%`.

## thm_rmt:player_equip_durability_max

The player's current armor maximum durability for a given slot. Accepted slots: head, chest, legs, feet, mainhand, offhand. Usage: %thm_rmt:player_equip_durability_max(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_equip_durability_max(mainhand)%`.

## thm_rmt:player_equip_durability_percent

The player's current armor durability percentage for a given slot. Accepted slots: head, chest, legs, feet, mainhand, offhand. Usage: %thm_rmt:player_equip_durability_percent(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_equip_durability_percent(mainhand)%`.

## thm_rmt:player_inv_name

The player's current inventory item name for a given slot. Accepted slots: 0-8 for hotbar, 9-35 for main inventory. Usage: %thm_rmt:player_inv_name(slot)%

- Return: `string`.
- Examples: `%thm_rmt:player_inv_name(0)%`.

## thm_rmt:player_inv_amount

The player's current inventory item amount for a given slot. Accepted slots: 0-8 for hotbar, 9-35 for main inventory. Usage: %thm_rmt:player_inv_amount(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_inv_amount(0)%`.

## thm_rmt:player_inv_durability

The player's current inventory item durability for a given slot. Accepted slots: 0-8 for hotbar, 9-35 for main inventory. Usage: %thm_rmt:player_inv_durability(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_inv_durability(0)%`.

## thm_rmt:player_inv_durability_max

The player's current inventory item max durability for a given slot. Accepted slots: 0-8 for hotbar, 9-35 for main inventory. Usage: %thm_rmt:player_inv_durability_max(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_inv_durability_max(0)%`.

## thm_rmt:player_inv_durability_percent

The player's current inventory item durability percentage for a given slot. Accepted slots: 0-8 for hotbar, 9-35 for main inventory. Usage: %thm_rmt:player_inv_durability_percent(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_inv_durability_percent(0)%`.

## thm_rmt:player_ender_name

The player's current ender chest item name for a given slot. Accepted slots: 0-26. Usage: %thm_rmt:player_ender_name(slot)%

- Return: `string`.
- Examples: `%thm_rmt:player_ender_name(0)%`.

## thm_rmt:player_ender_amount

The player's current ender chest item amount for a given slot. Accepted slots: 0-26. Usage: %thm_rmt:player_ender_amount(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_ender_amount(0)%`.

## thm_rmt:player_ender_durability

The player's current ender chest item durability for a given slot. Accepted slots: 0-26. Usage: %thm_rmt:player_ender_durability(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_ender_durability(0)%`.

## thm_rmt:player_ender_durability_max

The player's current ender chest item max durability for a given slot. Accepted slots: 0-26. Usage: %thm_rmt:player_ender_durability_max(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_ender_durability_max(0)%`.

## thm_rmt:player_ender_durability_percent

The player's current ender chest item durability percentage for a given slot. Accepted slots: 0-26. Usage: %thm_rmt:player_ender_durability_percent(slot)%

- Return: `number`.
- Examples: `%thm_rmt:player_ender_durability_percent(0)%`.

## thm_rmt:player_location

The player's current location. Optional args: x, y, z, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector3\|number`.
- Examples: `%thm_rmt:player_location%`, `%thm_rmt:player_location(x)%`, `%thm_rmt:player_location(floor)%`, `%thm_rmt:player_location(y,round)%`.

## thm_rmt:player_rotation

The player's current rotation. Optional args: x, y, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector2\|number`.
- Examples: `%thm_rmt:player_rotation%`, `%thm_rmt:player_rotation(x)%`, `%thm_rmt:player_rotation(floor)%`, `%thm_rmt:player_rotation(y,round)%`.

## thm_rmt:player_velocity

The player's current velocity. Optional args: x, y, z, floor, ceil, round, or axis plus mode such as x,floor.

- Return: `vector3\|number`.
- Examples: `%thm_rmt:player_velocity%`, `%thm_rmt:player_velocity(x)%`, `%thm_rmt:player_velocity(floor)%`, `%thm_rmt:player_velocity(y,round)%`.

## thm_rmt:score

Gets the player's score for an objective. Usage: %thm_rmt:score(objective_id)%

- Return: `number`.
- Examples: `%thm_rmt:score(kills)%`.

## thm_rmt:score_top_name

Gets the top player's name for an objective. Usage: %thm_rmt:score_top_name(objective_id, place)%

- Return: `string`.
- Examples: `%thm_rmt:score_top_name(kills, 1)%`.

## thm_rmt:score_top_value

Gets the top player's score for an objective. Usage: %thm_rmt:score_top_value(objective_id, place)%

- Return: `number`.
- Examples: `%thm_rmt:score_top_value(kills, 1)%`.

## thm_rmt:player_climbing

Whether the player is currently climbing.

- Return: `boolean`.
- Examples: `%thm_rmt:player_climbing%`.

## thm_rmt:player_falling

Whether the player is currently falling.

- Return: `boolean`.
- Examples: `%thm_rmt:player_falling%`.

## thm_rmt:player_emoting

Whether the player is currently emoting.

- Return: `boolean`.
- Examples: `%thm_rmt:player_emoting%`.

## thm_rmt:player_flying

Whether the player is currently flying.

- Return: `boolean`.
- Examples: `%thm_rmt:player_flying%`.

## thm_rmt:player_gliding

Whether the player is currently gliding.

- Return: `boolean`.
- Examples: `%thm_rmt:player_gliding%`.

## thm_rmt:player_in_water

Whether the player is currently in water.

- Return: `boolean`.
- Examples: `%thm_rmt:player_in_water%`.

## thm_rmt:player_jumping

Whether the player is currently jumping.

- Return: `boolean`.
- Examples: `%thm_rmt:player_jumping%`.

## thm_rmt:player_on_ground

Whether the player is currently on the ground.

- Return: `boolean`.
- Examples: `%thm_rmt:player_on_ground%`.

## thm_rmt:player_sleeping

Whether the player is currently sleeping.

- Return: `boolean`.
- Examples: `%thm_rmt:player_sleeping%`.

## thm_rmt:player_sneaking

Whether the player is currently sneaking.

- Return: `boolean`.
- Examples: `%thm_rmt:player_sneaking%`.

## thm_rmt:player_sprinting

Whether the player is currently sprinting.

- Return: `boolean`.
- Examples: `%thm_rmt:player_sprinting%`.

## thm_rmt:player_swimming

Whether the player is currently swimming.

- Return: `boolean`.
- Examples: `%thm_rmt:player_swimming%`.

## thm_rmt:player_standing_block

The block the player is currently standing on.

- Return: `string`.
- Examples: `%thm_rmt:player_standing_block%`.

## thm_rmt:world_gamerule

The value of a specific gamerule in the world.

- Return: `boolean\|number`.
- Examples: `%thm_rmt:world_gamerule(doDayLightCycle)%`.

## thm_rmt:world_isHardcore

Whether the world is in hardcore mode.

- Return: `boolean`.
- Examples: `%thm_rmt:world_isHardcore%`.

## thm_rmt:world_seed

The seed of the world.

- Return: `number`.
- Examples: `%thm_rmt:world_seed%`.

## thm_rmt:world_totalPlayers

The total number of players in the world.

- Return: `number`.
- Examples: `%thm_rmt:world_totalPlayers%`.

## thm_rmt:world_time

The time of day, in ticks, between 0 and 24000.

- Return: `number`.
- Examples: `%thm_rmt:world_time%`.

## thm_rmt:world_absolute_time

Returns the absolute time since the start of the world.

- Return: `number`.
- Examples: `%thm_rmt:world_absolute_time%`.

## thm_rmt:world_day

The current day, determined by the world time divided by the number of ticks per day. New worlds start at day 0.

- Return: `number`.
- Examples: `%thm_rmt:world_day%`.

## thm_rmt:world_moon

Returns the MoonPhase for the current time..

- Return: `string`.
- Examples: `%thm_rmt:world_moon%`.

## thm_rmt:system_tick

Represents the current world tick of the server.

- Return: `number`.
- Examples: `%thm_rmt:system_tick%`.

## thm_rmt:dimension_totalPlayers

The total number of players in the dimension.

- Return: `number`.
- Examples: `%thm_rmt:dimension_totalPlayers(minecraft:overworld)%`.

## thm_rmt:date

Formats the current date/time. Usage: %thm_rmt:date(format, timezone)% where timezone is optional.

- Return: `string`.
- Examples: `%thm_rmt:date(yyyy-MM-dd HH:mm:ss)%`, `%thm_rmt:date(dd/MM/yyyy HH:mm, GMT)%`, `%thm_rmt:date(MM/dd/yyyy hh:mm a, PST)%`.

## thm_rmt:time

Formats the current time. Usage: %thm_rmt:time(format, timezone)% where timezone is optional.

- Return: `string`.
- Examples: `%thm_rmt:time(HH:mm:ss)%`, `%thm_rmt:time(hh:mm a, PST)%`.

## thm_rmt:datetime

Formats the current date and time. Usage: %thm_rmt:datetime(format, timezone)% where timezone is optional.

- Return: `string`.
- Examples: `%thm_rmt:datetime(dd/MM/yyyy HH:mm, Europe/London)%`.
