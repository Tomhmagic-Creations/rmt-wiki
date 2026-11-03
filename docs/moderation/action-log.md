---
description: "Investigate observed gameplay using searchable action history."
---

# ⚙️ Action Log

Investigate observed gameplay using searchable action history.


## 📌 Investigate an incident

1. Open **Moderation > Action Log**.
2. Filter by player, action type, dimension, time or detail text.
3. Add an area filter when you know where it happened. Radius zero finds one block coordinate's history.
4. Open an entry to inspect the captured details. Container snapshots retain slot positions.
5. Use **Join & Leave History** when investigating connection times.

Recorded actions can include block changes, item drops/pickups, container opening/closing, sign changes, kills, interactions, inventory-slot changes and connections, depending on enabled types.

## 📌 Read the evidence carefully

Container snapshots show item type and quantity, not full enchantment or custom-item data. Opening and closing snapshots do not prove which viewer transferred an item. An inventory change identifies the inventory owner, not necessarily the person or script that caused it. Observed sign changes are associated with an interactor, not proof of authorship.

Action Log is gameplay history, not an inventory restore system. Its retention policy is separate from player-data cleanup. Use the [Error Log](/technical/error-log) for configuration problems instead.

## ❓ If nothing is recorded

Ask the administrator whether recording and the relevant action type were enabled at the time. History can expire under retention limits. A missing result is not proof an action never happened. Check the dimension, time window and player/area filters before broadening the search.
