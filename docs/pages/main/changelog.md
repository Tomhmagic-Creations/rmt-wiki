# 🛠️ Changelog

## V1.4 - 18th May 2025

### ✅ Fixed

- Setting Max Holograms and Hologram Limit to `-1` now disables limits.
- Admin claim subclaims not saving correctly.
- Permanent bans not purging data as expected.
- Claims not registering correctly, allowing players to break blocks in protected areas.
- Temporary bans sending incorrect time lengths to banned players.
- Add-On not properly kicking players as intended.
- Block data not saving with dimensionID correctly. A self-clean/fix has been added. If issues persist, break and re-lock the affected blocks.

### 🛠️ Changed

- Settings no longer save to data if they are set to defaults, reducing data size.
- Minor data storage optimizations for better performance.
- Options screen added when removing a chunk from a claim (select from list, input chunk, or select from standing position).
- Chunk view now displays 20 chunks per page, with navigation buttons to cycle through pages.
- Settings are now categorized for easier navigation.
- Chunk viewer now shows the claim name or "Unclaimed" status for unclaimed chunks.

### ✨ Added

- Claim Chunk Value can now be set to `0` to disable claim chunk rewards.
- Starting claim chunks can be set to `0` to disable starting claim chunks.
- RMT Tool can now be crafted with a Block of Sand or Red Sand.
- Admins can modify player claims in the Manage Players menu.
- Mods can delete player punishments in the Punishments menu.
- New Banned Items System for Admins and Mods to remove banned items from players and chests.
- `bannedItemsFrequency` setting to define how often banned items are checked. Default: `1 tick`.
- Claim Min/Max Y settings to set Y level boundaries for claims in each dimension. Default: Full chunk height.
- Maintenance Mode setting to restrict access to only Admins and Mods. Useful for testing and development.
- Trusted Ranks for claims and subclaims, allowing access based on ranks instead of individual players.
- Option to disable giving the Realm Tool on first join.
- Option to disable access to the Nether.
- Option to completely disable claiming.
- Required Ranks for Warps, restricting access to specific ranks.
- Admins can now sneak while using the Admin Claim Flag to claim a chunk for another player.
- New chunk owner cache system to optimize claim checks and performance.

### 🗑️ Removed

- Recipes removed from the guidebook as they are now unlocked by default and viewable in the crafting table.

---

## V1.3 - 16th April 2025

### ✅ Fixed

- Spawn teleport location too high.
- Admin Claim Flag spamming issue.
- Invsee clearing not fully removing items.

### ✨ Added

- Cooldown added to Claim and Admin Claim flags.
- Event cancel for general use items under the Use Item permission, excluding Realm Tool and Chunk Viewer.

---

## V1.2 - 18th March 2025

Guide updates and additional tweaks.

---

## V1.1 - 9th March 2025

Minor tweaks and fixes for review.

---

## V1.0 - 1st December 2024

Initial release.
