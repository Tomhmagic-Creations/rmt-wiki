---
description: "Create a readable menu with text and buttons that open forms or run Stored Commands."
---

# 🛠️ Custom Forms

Create a readable menu with text and buttons that open forms or run Stored Commands.


1. Open **Technical > Forms** and create a form with a stable ID, such as `welcome`.
2. Set its title.
3. Add Text, Heading or Line Break elements to explain the page.
4. Add a Button and select **Open Form** or **Run Stored Commands**.
5. Choose the target form ID or ordered Stored Command IDs, and whether the button should close the form.
6. Save and preview the form. Reorder elements if the reading flow needs adjustment.

This is a menu builder; it does not create inventory screens or execute JavaScript.

## 📌 Let players open it

```text
/thm_rmt:form welcome
```

Self-opening needs both `thm_rmt:command.form=(welcome)` and `thm_rmt:form=(welcome)` access. An NPC opening a form still requires the form's runtime access, but does not require the player to type the command.

For an administrator or command block to open it for a target, use `thm_rmt:form welcome @p` with the appropriate caller/target permissions. Command blocks must supply targets.

## ✅ Test every button

Placeholders in titles, headings, text and labels resolve for the viewer. A button that links another form does not automatically grant access to it. Commands run through the existing executor rules; a button does not turn an ordinary player into an operator.

Use [Build an information NPC](/tutorials/information-npc) to combine a form with an NPC and travel actions.
