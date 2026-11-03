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

Give players the Realm Tool when they join. The menu command remains a separate entry path; holding the tool does not bypass locks or claim rules.

**Control:** Toggle · **Default:** On

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
