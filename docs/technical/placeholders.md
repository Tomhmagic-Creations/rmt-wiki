---
description: "Insert names, stats and other changing values into supported text and actions."
---

# 🛠️ Placeholders

Insert names, stats and other changing values into supported text and actions.


**Find it:** Technical > Placeholders for searchable descriptions and examples.

## 📌 Use a value

1. Choose a supported text field, such as a hologram line, announcement, nameplate or custom-form text.
2. Insert the complete placeholder, including both percent signs.
3. Save and preview it with the correct player or event context.

| Placeholder | Value |
| --- | --- |
| `%thm_rmt:player_name%` | Current player subject's name |
| `%thm_rmt:player_stat(kills)%` | The subject's kills stat |
| `%thm_rmt:score(points)%` | Their score in the points objective |
| `%thm_rmt:player_team_name%` | Their current team name |
| `%thm_rmt:world_metadata(event_enabled)%` | A stored world value |
| `%thm_rmt:event(damage)%` | Captured damage from an applicable event |

## 💡 Example text

```text
Hello %thm_rmt:player_name%!
Your team: %thm_rmt:player_team_name%
Kills: %thm_rmt:player_stat(kills)%
```

## 📌 Context matters

A nameplate describes its wearer. A custom form describes its viewer. A scheduled announcement resolves for each recipient. A Stored Command uses its configured executor and event context. A non-player subject cannot supply player-only data.

Some values are numbers or booleans. Conditions compare those actual types; formatted text is not a substitute for a numeric value. Missing data is not automatically zero. Command expansion fails when a required placeholder is unavailable.

Use `%namespace:key(argument)%` for arguments. This is not a programming expression or JavaScript. Not every arbitrary text field supports expansion. The [full placeholder reference](/reference/placeholders) lists supported keys, return types and examples.
