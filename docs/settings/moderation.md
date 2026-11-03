---
description: "Configure admission, saved inventories, privacy and punishment announcements."
---

# ⚙️ Moderation

Configure admission, saved inventories, privacy and punishment announcements.

## 📌 Save the category

Open **Admin > Settings > Moderation**, review the complete category and select **Save Settings**. Enabling a policy does not grant the staff permissions needed to manage its data.

## Saved Inventories

Capture eligible logout inventory sections for offline Invsee. Real Minecraft operators and players with the saved-inventory bypass are excluded. This is not a general inventory-history backup.

**Control:** Toggle · **Default:** Off

## Maintenance Mode

Allow only players with the maintenance bypass to join. Configure and test the intended bypass before enabling it.

**Control:** Toggle · **Default:** Off

## Block Sensitive Menus During Streamer Mode

Block report details, punishment history, inventory viewers, Action Log results and error details while the viewer uses Streamer Mode. Other access permissions still apply.

**Control:** Toggle · **Default:** On

## Whitelist

Enable RMT’s registered-player whitelist. Manage entries through Moderation > Whitelist; this is separate from a dedicated server’s own allowlist file.

**Control:** Toggle · **Default:** Off

## Purge Days

The inactivity threshold in real days for player-data cleanup. Review the Player cleanup guide before changing retention; this concerns RMT data, not a terrain rollback.

**Control:** Slider · **Default:** 90 · **Range:** 30 to 360; increments of 30

## Announce Warns?

Announce Warns publicly.

**Control:** Toggle · **Default:** Off

## Announce Kicks?

Announce Kicks publicly.

**Control:** Toggle · **Default:** Off

## Announce Bans?

Announce Bans publicly.

**Control:** Toggle · **Default:** Off

## 📋 Setup versus daily use

Saved Inventories has a separate Admin setup/recovery guide; Invsee operation belongs in Moderation. The Whitelist switch enables the policy, while Moderation manages its entries. The announcement toggles choose public notifications; they do not authorise warnings, kicks or bans.

## 🔐 Streamer Mode policy

The sensitive-menu switch affects staff screens as well as ordinary players who can reach them. Disabling the restriction does not grant access to those screens. Personal privacy choices remain under Profile.

## 🗑️ Inactivity cleanup

Review the Player cleanup guide and retained records before changing Purge Days. Action Log retention is controlled separately in **Action Log Settings**, not by this slider.
