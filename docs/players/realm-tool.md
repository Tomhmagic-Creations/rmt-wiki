---
description: "Get a Realm Tool and understand the realm's movement and death rules for it."
---

# 🧭 Realm Tool

Use the Realm Tool to open the RMT menu. The buttons you see still depend on your access.

## 📌 Get a tool

The realm may give you one automatically on your first join. To request one yourself, enter:

```text
/thm_rmt:tool
```

The short name `/tool` works when available. Your account needs `thm_rmt:command.tool`. There are no Realm Tool crafting recipes.

## 📦 Make room first

The command requires inventory space for a new tool. It refuses a full inventory rather than dropping a replacement into the world. If you already carry a Realm Tool, it updates that tool's options instead of giving you another copy.

## 🔒 Moving and dropping it

Your realm chooses the lock mode:

| Mode | What you can do |
| --- | --- |
| Unlocked | Move or drop it normally |
| Lock in Inventory | Move it within inventory, but not drop it |
| Lock in Slot | Keep it in the assigned slot; moving and dropping are blocked |

The default is Unlocked. The realm separately chooses whether you keep the tool on death; that starts off. Locking does not itself enable keeping it on death.

Carried tools receive the current options when given, when you join and when the realm changes those settings.

## ❓ If the command is unavailable

Ask staff whether replacement requests are enabled for your account. Automatic first-join giving and command access are independent, so receiving an initial tool does not necessarily mean you can request another.

If the item cannot be used at your location, `/thm_rmt:menu` is the separate command alternative when permitted. A tool does not bypass a locked block, item-use restriction or claim protection.
