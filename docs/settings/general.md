---
description: "Configure the realm’s messages, menu tool, nameplates and combat mode."
---

# ⚙️ General

Configure the realm’s messages, menu tool, nameplates and combat mode.

## 📌 Save the category

Open **Admin > Settings > General**, make your changes and select **Save Settings**. Use Back to leave an unsaved draft. These controls apply to the realm, not only to your account.

## Message Prefix

The prefix added to supported RMT messages. Use Minecraft formatting codes if you want coloured text.

**Control:** Text field · **Default:** White [RMT] prefix with coloured RMT text

## Give RMT Tool

Give players the Realm Tool automatically on their **first join**. This is separate from permission to request a replacement with `/thm_rmt:tool`.

**Control:** Toggle · **Default:** On

## Realm Tool Lock Mode

Choose how carried Realm Tools can be moved or dropped.

| Mode | Behaviour |
| --- | --- |
| Unlocked | No tool lock is applied |
| Lock in Inventory | Players can move the tool within inventory but cannot drop it |
| Lock in Slot | Players cannot move the tool from its slot or drop it |

**Control:** Dropdown · **Default:** Unlocked

## Keep Realm Tool on Death

Keep the carried Realm Tool when its holder dies. This is independent of lock mode: locking a tool does not automatically enable keeping it on death.

**Control:** Toggle · **Default:** Off

Tool options apply when a tool is given, when a player joins and when these settings change. Changes update carried tools for online players; they do not scan tools stored in chests or offline inventories.

## Replacement command access

`/thm_rmt:tool` requires `thm_rmt:command.tool`, independently of Give RMT Tool. Turning off automatic first-join giving does not disable replacement requests. To prevent both distribution paths, turn off automatic giving and remove or deny the command grant for the intended players.

Fresh setup grants the command to Default. Existing V2 groups are not automatically updated. To enable it for ordinary players in an existing V2 realm:

```text
/thm_rmt:permgroupnode default add thm_rmt:command.tool allow
```

Creative inventory and native operator item-giving commands are separate from this command permission. Tool possession does not bypass item-use, claim or lock checks.

## Custom Nameplates

Use the custom text-display nameplate renderer. Presets and their appearance are designed in Admin > Nameplates.

**Control:** Toggle · **Default:** Off

## Default Nameplate Preset

The preset ID used when a player has no enabled assigned preset. Enter the permanent preset ID, not its display name.

**Control:** Text field · **Default:** "default"

## PvP Mode

Choose Off, Toggle, Team, Team and Toggle, or All. Toggle requires both players to opt in; Team respects friendly fire; Team and Toggle requires both policies. All ignores personal/team choices, but claim protections still apply.

**Control:** Dropdown · **Default:** Team (declared value; see first-load note below)

## 💡 Choosing a PvP policy

Use Off for a non-combat realm, Toggle for mutual player consent, or Team when friendly-fire decisions should matter. The raw declared default is Team, but first policy initialisation reads the existing native PvP gamerule and starts from Off or All. The saved RMT mode is authoritative afterwards.

## 📌 Related administration

Nameplate templates and visual presets have their own **Admin > Nameplates** editor. Editing main-menu body text is a separate **Admin > Edit Main Menu** workflow, described in the Admin menu. Native Minecraft rules are under Manage World, not part of General.
