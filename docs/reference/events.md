---
description: "Exact event fields for the current documented V2 build. Use the feature guides for setup and examples."
---

# 📋 Event fields

Exact event fields for the current documented V2 build. Use the feature guides for setup and examples.




73 Technical Events definitions. Field kinds are expanded by EventContext; not every internal signal is exposed in the editor. Before-event protection is not an editable Technical Event: bindings run after capture and cannot cancel gameplay. Missing optional event fields do not match ordinary comparisons.

## portalEntered

Field | Kind
--- | ---
`player` | entity
`portalId` | string

## blockCommandActivated

Field | Kind
--- | ---
`player` | entity
`block` | block
`bindingId` | string
`trigger` | string
`itemStack` | item

## npcActivated

Field | Kind
--- | ---
`player` | entity
`npc` | entity
`trigger` | string

## npcPathPointReached

Field | Kind
--- | ---
`npc` | entity
`target` | entity
`pointIndex` | number

## reportSubmitted

Field | Kind
--- | ---
`player` | entity
`reportId` | string
`playerId` | string
`reporterId` | string
`time` | number

## reportValidated

Field | Kind
--- | ---
`player` | entity
`reportId` | string
`playerId` | string
`reporterId` | string
`time` | number

## reportChanged

Field | Kind
--- | ---
`player` | entity
`reportId` | string
`playerId` | string
`reporterId` | string
`time` | number

## reportDeleted

Field | Kind
--- | ---
`player` | entity
`reportId` | string
`playerId` | string
`reporterId` | string
`time` | number

## punishmentIssued

Field | Kind
--- | ---
`player` | entity
`caseId` | string
`playerId` | string
`actorId` | string
`kind` | string
`time` | number
`automated` | boolean

## playerAFKChanged

Field | Kind
--- | ---
`player` | entity
`previous` | boolean
`isAFK` | boolean

## statChanged

Field | Kind
--- | ---
`player` | entity
`statId` | string
`previous` | number
`value` | number

## blockContainerClosed

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`closeSource.entity` | entity

## blockContainerOpened

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`openSource.entity` | entity

## blockExplode

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`explodedBlockPermutation` | permutation
`source` | entity

## buttonPush

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`source` | entity

## dataDrivenEntityTrigger

Field | Kind
--- | ---
`entity` | entity
`eventId` | string

## effectAdd

Field | Kind
--- | ---
`effect` | effect
`entity` | entity

## entityContainerClosed

Field | Kind
--- | ---
`closeSource.entity` | entity
`entity` | entity

## entityContainerOpened

Field | Kind
--- | ---
`entity` | entity
`openSource.entity` | entity

## entityDie

Field | Kind
--- | ---
`damageSource.cause` | string
`damageSource.damagingEntity` | entity
`damageSource.damagingProjectile` | entity
`deadEntity` | entity

## entityHeal

Field | Kind
--- | ---
`healedEntity` | entity
`healing` | number
`healSource.cause` | string

## entityHealthChanged

Field | Kind
--- | ---
`entity` | entity
`newValue` | number
`oldValue` | number

## entityHitBlock

Field | Kind
--- | ---
`blockFace` | string
`damagingEntity` | entity
`hitBlock` | block
`hitBlockPermutation` | permutation

## entityHitEntity

Field | Kind
--- | ---
`damagingEntity` | entity
`hitEntity` | entity

## entityHurt

Field | Kind
--- | ---
`damage` | number
`damageSource.cause` | string
`damageSource.damagingEntity` | entity
`damageSource.damagingProjectile` | entity
`hurtEntity` | entity

## entityItemDrop

Field | Kind
--- | ---
`entity` | entity
`items` | entities

## entityItemPickup

Field | Kind
--- | ---
`entity` | entity
`items` | items

## entityLoad

Field | Kind
--- | ---
`entity` | entity

## entityRemove

Field | Kind
--- | ---
`removedEntityId` | string
`typeId` | string

## entitySpawn

Field | Kind
--- | ---
`cause` | string
`entity` | entity

## entityStartSneaking

Field | Kind
--- | ---
`entity` | entity

## entityStopSneaking

Field | Kind
--- | ---
`entity` | entity

## entityTamed

Field | Kind
--- | ---
`entity` | entity
`tamingEntity` | entity

## entityUpgrade

Field | Kind
--- | ---
`entity` | entity
`upgradeId` | string

## explosion

Field | Kind
--- | ---
`dimension` | dimension
`source` | entity
`getImpactedBlocks()` | blocks

## gameRuleChange

Field | Kind
--- | ---
`rule` | string
`value` | scalar

## itemCompleteUse

Field | Kind
--- | ---
`itemStack` | item
`source` | entity
`useDuration` | number

## itemReleaseUse

Field | Kind
--- | ---
`itemStack` | item
`source` | entity
`useDuration` | number

## itemStartUse

Field | Kind
--- | ---
`itemStack` | item
`source` | entity
`useDuration` | number

## itemStartUseOn

Field | Kind
--- | ---
`block` | block
`blockFace` | string
`itemStack` | item
`source` | entity

## itemStopUse

Field | Kind
--- | ---
`itemStack` | item
`source` | entity
`useDuration` | number

## itemStopUseOn

Field | Kind
--- | ---
`block` | block
`itemStack` | item
`source` | entity

## itemUse

Field | Kind
--- | ---
`itemStack` | item
`source` | entity

## leverAction

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`isPowered` | boolean
`player` | entity

## pistonActivate

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`isExpanding` | boolean
`piston.state` | string
`piston.isMoving` | boolean

## playerBreakBlock

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`brokenBlockPermutation` | permutation
`itemStackAfterBreak` | item
`itemStackBeforeBreak` | item
`player` | entity

## playerButtonInput

Field | Kind
--- | ---
`button` | string
`newButtonState` | string
`player` | entity

## playerCancelBreakingBlock

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`blockPermutation` | permutation
`breakProgress` | number
`face` | string
`heldItemStack` | item
`player` | entity

## playerDimensionChange

Field | Kind
--- | ---
`fromDimension` | dimension
`fromLocation` | vector
`player` | entity
`toDimension` | dimension
`toLocation` | vector

## playerEmote

Field | Kind
--- | ---
`personaPieceId` | string
`player` | entity

## playerGameModeChange

Field | Kind
--- | ---
`fromGameMode` | string
`player` | entity
`toGameMode` | string

## playerHotbarSelectedSlotChange

Field | Kind
--- | ---
`itemStack` | item
`newSlotSelected` | number
`player` | entity
`previousSlotSelected` | number

## playerInputModeChange

Field | Kind
--- | ---
`newInputModeUsed` | string
`player` | entity
`previousInputModeUsed` | string

## playerInputPermissionCategoryChange

Field | Kind
--- | ---
`category` | number
`enabled` | boolean
`player` | entity

## playerInteractWithBlock

Field | Kind
--- | ---
`beforeItemStack` | item
`block` | block
`blockFace` | string
`faceLocation` | vector
`isFirstEvent` | boolean
`itemStack` | item
`player` | entity

## playerInteractWithEntity

Field | Kind
--- | ---
`beforeItemStack` | item
`itemStack` | item
`player` | entity
`target` | entity

## playerInventoryItemChange

Field | Kind
--- | ---
`beforeItemStack` | item
`inventoryType` | string
`itemStack` | item
`player` | entity
`slot` | number

## playerJoin

Field | Kind
--- | ---
`playerId` | string
`playerName` | string

## playerLeave

Field | Kind
--- | ---
`playerId` | string
`playerName` | string

## playerPlaceBlock

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`player` | entity

## playerSpawn

Field | Kind
--- | ---
`initialSpawn` | boolean
`player` | entity

## playerStartBreakingBlock

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`blockPermutation` | permutation
`face` | string
`heldItemStack` | item
`player` | entity

## playerSwingStart

Field | Kind
--- | ---
`heldItemStack` | item
`player` | entity
`swingSource` | string

## pressurePlatePop

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`previousRedstonePower` | number
`redstonePower` | number

## pressurePlatePush

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`previousRedstonePower` | number
`redstonePower` | number
`source` | entity

## projectileHitBlock

Field | Kind
--- | ---
`dimension` | dimension
`hitVector` | vector
`location` | vector
`projectile` | entity
`source` | entity
`getBlockHit().block` | block
`getBlockHit().face` | string
`getBlockHit().faceLocation` | vector

## projectileHitEntity

Field | Kind
--- | ---
`dimension` | dimension
`hitVector` | vector
`location` | vector
`projectile` | entity
`source` | entity
`getEntityHit().entity` | entity

## soundCompleted

Field | Kind
--- | ---
`soundInstanceId` | string

## targetBlockHit

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`hitVector` | vector
`previousRedstonePower` | number
`redstonePower` | number
`source` | entity

## tripWireTrip

Field | Kind
--- | ---
`block` | block
`dimension` | dimension
`isPowered` | boolean
`sources` | entities

## weatherChange

Field | Kind
--- | ---
`dimension` | string
`newWeather` | string
`previousWeather` | string

## worldLoad

Field | Kind
--- | ---

## scriptEventReceive

Field | Kind
--- | ---
`id` | string
`initiator` | entity
`message` | string
`sourceBlock` | block
`sourceEntity` | entity
`sourceType` | string

## Internal Custom Signals

These are internal TypeScript signals, not script-event request IDs. Use the documented addon Events endpoint for cross-addon integration. Player objects are live-only; ID-only records support offline cases.

- `externalPlaceholderChanged`: `{ key: string; playerId?: string }`
- `externalEventEmitted`: `{ eventId: string; data: object }`
- `externalEventDefinitionChanged`: `{ eventId: string; available: boolean }`
- `externalMenuActivated`: `{ namespace: string; id: string; player: Player; responseId: string }`
- `externalStatDefinitionChanged`: `{ statId: string }`
- `permissionsChanged`: `Record&lt;string, never&gt;`
- `nameplatePresetsChanged`: `Record&lt;string, never&gt;`
- `playerSpyChanged`: `{ player: Player; enabled: boolean; mode?: "spectator" \| "creative" }`
- `portalEntered`: `PortalEntry`
- `portalChanged`: `{ portalId: string }`
- `portalSelectionReady`: `{ player: Player; token: object }`
- `portalMenuRequested`: `{ player: Player }`
- `blockCommandActivated`: `BlockCommandActivation`
- `npcActivated`: `{ player: Player; npc: Entity; trigger: "hit" \| "interact" }`
- `npcPathMenuRequested`: `{ player: Player; npc: Entity }`
- `claimFlagMenuRequested`: `{ player: Player; operation: ClaimFlagOperation; snapshot?: string }`
- `npcPathPointReached`: `{ npc: Entity; target: Entity; pointIndex: number }`
- `actionLogSettingsChanged`: `Record&lt;string, never&gt;`
- `settingChanged`: `{ key: string }`
- `waypointsChanged`: `{ player?: Player }`
- `spawnChanged`: `Record&lt;string, never&gt;`
- `claimChanged`: `{ claimId: string }`
- `claimRulesChanged`: `Record&lt;string, never&gt;`
- `playerClaimBorderChanged`: `{ player: Player }`
- `playerChunkViewerChanged`: `{ player: Player }`
- `playerStreamerModeChanged`: `{ player: Player }`
- `playerDeathLocationChanged`: `{ player: Player; location: Vector3; dimensionId: string }`
- `worldBorderChanged`: `{ dimensionId: string }`
- `playerWorldBorderAppearanceChanged`: `{ player: Player }`
- `teamChanged`: `{ teamId: string }`
- `reportSubmitted`: `ReportEvent`
- `reportValidated`: `ReportEvent`
- `reportChanged`: `ReportEvent`
- `reportDeleted`: `ReportEvent`
- `punishmentIssued`: `PunishmentIssuedEvent`
- `playerAFKChanged`: `{ player: Player; previous: boolean; isAFK: boolean }`
- `playerGroupMembershipChanged`: `{ playerId: string }`
- `statValueChanged`: `{ player: Player; statId: string; previous: number; value: number }`
- `statDeleted`: `{ statId: string }`
- `playerChangeChunk`: `PlayerChangeChunkEvent`
- `menuButtonClick`: `MenuButtonClickEvent`
- `playerChangeLocation`: `PlayerChangeLocationEvent`
- `permissionGroupPermissionAdd`: `PermissionGroupPermissionAddEvent`
- `permissionGroupPermissionRemove`: `PermissionGroupPermissionRemoveEvent`
- `permissionGroupPermissionUpdate`: `PermissionGroupPermissionUpdateEvent`
- `playerPermissionAdd`: `PlayerPermissionAddEvent`
- `playerPermissionRemove`: `PlayerPermissionRemoveEvent`
- `playerPermissionUpdate`: `PlayerPermissionUpdateEvent`
