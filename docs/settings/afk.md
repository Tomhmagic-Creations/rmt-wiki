---
description: "Choose when players become idle and the optional effects of being AFK."
---

# ⚙️ AFK

Choose when players become idle and the optional effects of being AFK.

## 📌 Save the category

Open **Admin > Settings > AFK**, choose the delays and optional spawn policy, then **Save Settings**. Delays here are minutes; the spawn radius is blocks.

## AFK Time

Time in minutes before a player is marked as AFK, set to 0 to disable.

**Control:** Slider · **Default:** 5 · **Range:** 0 to 20; increments of 1

## AFK Spawn

Enable suppression of newly spawned monsters in an AFK-only nearby area. An active nearby player prevents that AFK-only suppression. Existing mobs are not swept away.

**Control:** Toggle · **Default:** Off

## AFK Spawn Radius

Radius in blocks around the AFK player that monsters cannot spawn.

**Control:** Slider · **Default:** 20 · **Range:** 5 to 50; increments of 5

## AFK Kick

Minutes after entering AFK before an automatic kick. Zero disables kicking; this is not the number of minutes since the player’s last input.

**Control:** Slider · **Default:** 0 · **Range:** 0 to 120; increments of 5

## 📋 What counts as activity

Changed input, meaningful camera movement and varied successful interactions can restore activity. Boats, minecarts, water and knockback do not keep someone active merely by moving them. Holding the same input or repeating an identical action does not reset the timer continuously.

## ⏳ Allowance and exemptions

AFK pauses eligible claim-allowance earning progress. The `thm_rmt:afk.bypass` permission exempts a player from AFK policy. An AFK Time of zero disables detection and clears AFK state. The kick delay of zero disables only the kick.

## 📣 AFK announcements

Use the **playerAFKChanged** event with Stored Commands for transition messages. There is no fixed global AFK broadcast. The AFK announcement tutorial gives the complete setup.

On a locally hosted world, a kicked player may need the world restarted before rejoining, as noted by the in-game control.
