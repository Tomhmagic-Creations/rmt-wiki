---
description: "Combine a filtered stat, placeholder and managed scoreboard."
---

# 📚 Build a kill leaderboard

Combine a filtered stat, placeholder and managed scoreboard.


**Uses:** [Stats](/technical/stats), [Placeholders](/technical/placeholders), [Scoreboards](/technical/scoreboards).

## 📌 1. Count zombie kills

Create `zombie_kills` in **Technical > Stats**. Choose Entity kills, filter by `minecraft:zombie`, enable it and make it visible in Profile. Kill one zombie and check the result.

## 📌 2. Create the board

In **Technical > Scoreboards**, create a board using:

```text
%thm_rmt:player_stat(zombie_kills)%
```

Name it Zombie Hunters and choose descending order so higher totals appear first.

## 📌 3. Display it

Open Displays, choose Sidebar and select the new board. Confirm replacement if another objective is already displayed. This changes the display slot; it does not delete the previous objective's scores.

## ✅ 4. Verify updates

Kill another zombie and confirm the stat-backed board updates. Check with another online player. Managed boards show online player entries; they are not an all-time offline ranking database.

If an entry disappears, check the stat ID and numeric placeholder. Missing values are unavailable, not a guaranteed zero. Refresh Scores and inspect the Error Log for configuration problems.

**Adapt it:** create a second board for another numeric stat and use a Sidebar cycle to alternate them. Each display area has its own cycle interval.
