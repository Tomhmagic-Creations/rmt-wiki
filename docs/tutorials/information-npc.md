---
description: "Combine an NPC and a custom form into a simple help desk."
---

# 📚 Build an information NPC

Combine an NPC and a custom form into a simple help desk.


**Uses:** [Custom Forms](/technical/custom-forms), [NPCs](/technical/npcs), optionally [Stored Commands](/technical/stored-commands).

## 📌 1. Create the welcome form

In **Technical > Forms**, create `welcome` with a short title, a Heading, a few Text elements explaining your realm rules and a Line Break between topics. Preview it before adding actions.

## 🔐 2. Grant form access

Allow the intended group to use `thm_rmt:form=(welcome)`. If players should also open it from chat, allow `thm_rmt:command.form=(welcome)` separately.

## 📌 3. Place the guide NPC

Use NPC Add at your help desk, then NPC Edit to name and style the character. In **Interact Actions**, select the saved `welcome` custom form. Keep its Hit Actions empty if hits should not open it.

## 📌 4. Optionally add a Spawn button

Create a Stored Command named `help_spawn` containing:

```text
thm_rmt:spawn
```

Add a Button to the form, choose Run Stored Commands and select `help_spawn`. Choose close-on-click if you want the form to close when travel begins. The viewer must have the required Spawn feature/command permissions.

## ✅ 5. Test as a player

Put away editing tools and interact with the NPC normally. Confirm the form opens, its text is readable and its button uses ordinary player authority. Move away to check the interaction session closes or invalidates as intended.

**Adapt it:** use linked forms for Rules, Travel and FAQ. Keep each page short and grant access to every linked form rather than assuming the first form unlocks the rest.
