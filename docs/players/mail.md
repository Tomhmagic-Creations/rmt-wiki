---
description: "Send private letters, read replies and manage your inbox."
---

# 🧭 Mail

Send private letters, read replies and manage your inbox.


1. Open **Profile > Mail**.
2. Read a letter to mark it read, or use the composer to send a new one.
3. Select a registered player, including an offline player, and enter your message.
4. Use Reply, Delete or the blocked-sender controls as needed.

```text
/thm_rmt:mail "Player Name" "Your house is ready!"
```

Mail is plain text. Placeholders and command text are not executed. Messages may contain up to 4,000 characters, although your client's input limit can be shorter.

## 📌 Inbox and Outbox

**Outbox** contains your sent private letters. Deleting a sent entry does not recall the recipient's letter. Deleting an inbox entry does not remove the sender's history.

The realm sets inbox and sent-history capacities. A full sent history prevents a new send until you delete entries; old history is not silently replaced.

## 🚫 Block or unblock a sender

Use the blocked-sender controls from Mail to manage who can send to you. Blocking is personal; it does not remove someone from the realm or alter other players’ inboxes. Authorised staff may have a block bypass, while cooldown and capacity rules still apply.

## ❓ If a letter cannot be sent

Check the recorded recipient name, sending permission, cooldown, duplicate-message policy and history capacity. Deleting a received letter only removes your copy. Deleting a sent-history entry does not recall the letter from its recipient.
