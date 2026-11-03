---
description: "Display numeric placeholders or copies of existing objectives in Minecraft scoreboard areas."
---

# 🛠️ Scoreboards

Display numeric placeholders or copies of existing objectives in Minecraft scoreboard areas.


1. Open **Technical > Scoreboards** and create a board.
2. Choose a numeric player placeholder, such as `%thm_rmt:player_stat(zombie_kills)%`.
3. Set the name and ordering, then save.
4. Open **Displays** and choose Sidebar, Player List or Below Name.
5. Select the board and confirm any replacement of an existing display.

You can also create a display copy of an existing native objective using the searchable picker. This creates a separate managed objective; it does not adopt or delete the source.

## 📌 Set a cycle

In a display area, choose a cycle, add boards in the desired order and set the whole-second interval. Each area has its own list and interval. A restart begins at its first entry.

## ❓ Updates and missing entries

Direct stat sources react to stat changes. Other sources use a configured update interval. Only online player entries are maintained; leaving removes them from the managed board. Hiding a board does not stop its updates.

Values must be finite numbers that fit scoreboard integer limits. Fractions truncate towards zero. A missing or invalid value removes that player's entry instead of showing a guessed zero. Use Refresh Scores and the Error Log to investigate.

Deleting a managed board removes its objective and scores, never the source stat or native objective. If another system takes a display slot later, RMT does not automatically take it back.

Try [Build a kill leaderboard](/tutorials/kill-leaderboard).
