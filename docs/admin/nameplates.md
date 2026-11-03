---
description: "Design shared labels and assign them through permission groups."
---

# ⚙️ Nameplates

Design shared labels and assign them through permission groups.


1. Open **Admin > Nameplates** and create a preset with a stable ID.
2. Set a template and preview it.
3. Choose appearance, audience and hiding options.
4. Enable/save it, then select it as the realm default or assign it through permissions.

## 📌 A simple template

```text
%thm_rmt:nameplate_prefix% %thm_rmt:player_name% %thm_rmt:nameplate_suffix%%thm_rmt:nameplate_afk%
```

Templates describe the player wearing the nameplate. Use `%thm_rmt:player_team_name%` to include their team. A literal `\n` creates a line break in custom mode; vanilla mode flattens lines.

## 📌 Vanilla or custom

The realm starts in vanilla mode. Enable custom nameplates through the realm setting when you want scale, colour, background, vertical offset, range and depth controls. Custom labels are shown to eligible other players in the same dimension.

Team-only custom presets use current membership. An unteamed player has no team audience. Hiding while sneaking, invisible or in Spy can be configured.

## 📌 Assign a preset

Use a data node such as `thm_rmt:nameplate.preset=(preset_id)` in a group or personal assignment. The preset ID is permanent even if its display name changes. Missing or disabled selections fall back to the configured default and then the built-in default.
