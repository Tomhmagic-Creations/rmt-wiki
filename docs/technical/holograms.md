---
description: "Place floating text and optionally add click or hit actions."
---

# 🛠️ Holograms

Place floating text and optionally add click or hit actions.


1. Use the **Place Hologram** item on a block.
2. Add and order text lines, including supported placeholders.
3. Adjust placement, rotation, scale and text/background colours.
4. Choose render distance, visibility and expiry if needed, then save.

Creation depends on feature access and separate ownership/rendering quotas. Staff access to other players' displays is separately controlled.

## 📌 Edit an existing display

Use **Hologram Editor** on a block near the display. It selects the nearest hologram you may manage within eight blocks, in three dimensions. You do not need an interaction hitbox just to edit text.

## 📌 Add an action

Create a Stored Command first, then add its ID to the hologram's Hit or Interact action list. Interactive displays use an optional hitbox. Using the editor on that hitbox opens its exact display; other items activate the appropriate action.

Plain text does not need an entity hitbox. Appearance and visibility settings are separate from action configuration. A saved display can still be unavailable because of range, capacity or permissions.

Normal RMT holograms are saved. Displays supplied through the external addon API are runtime-only and must be recreated by that addon after restart.
