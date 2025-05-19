# ⚖️ Moderation Actions

Moderators have access to a range of actions to manage player behavior and enforce server rules. This section covers all available moderation actions, including warnings, kicks, and bans.

---

## ⚠️ Warn

- Allows moderators to warn players for rule violations.
- Warnings can be sent to both online and offline players.
- If the player is offline, they will receive the warn message upon logging in.
- A text input menu allows the moderator to enter a warning message (max 100 characters).

---

## 🚪 Kick

- Allows moderators to kick online players from the server.
- Similar to the vanilla kick system but with data storage for review.
- A text input menu allows the moderator to enter a kick message (max 100 characters).

---

## ⏳ Temp Ban

- Temporarily bans a player for a specified duration.
- Can be applied to both online and offline players.
- The temp ban form requires a reason and at least one duration type (days, hours, minutes).
- If the player is online, they are immediately kicked upon ban initiation.
- Players attempting to join while banned will be kicked.

---

## 🚫 Ban

- Permanently bans a player from the server.
- Should only be used for severe or repeat offenses.
- A confirmation message appears before finalizing the ban.
- If the player is online, they are immediately kicked upon ban initiation.
- For realms, it is recommended to also remove the player from the realm member list.

::: warning
Permanent bans delete all player data except the last ban record to optimize storage.
:::

---

## 🔓 Unban

- Allows moderators to unban a player.
- Typically used to end temp bans early but can also be used for permanent bans.
- A search menu allows the moderator to find the player to unban.
- If no active ban is found, a message is displayed.

---

## 📜 Punishments

- Displays a list of all punishments for a selected player.
- Allows the moderator to delete specific punishments from the list.

---

## 🎥 Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ywPNqdHrwE?si=a3nf0QsUv9SRZHAC&amp;start=514" title="Moderation Actions Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
