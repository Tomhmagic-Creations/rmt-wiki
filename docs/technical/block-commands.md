---
description: "Turn a selected block into a protected click or hit action."
---

# 🛠️ Block Commands

Turn a selected block into a protected click or hit action.


1. Create the required [Stored Command](/technical/stored-commands).
2. Look at the intended nearby block and open **Technical > Block Commands**.
3. Assign it a binding and display name.
4. Add existing IDs to the **Right-click** and/or **Hit** lists.
5. Reorder and save, then activate it as an ordinary player.

Each list supports up to 20 Stored Command references. Edit command text in Stored Commands, not in the binding. Existing crates, locks and other bindings can conflict with assignment.

## 📌 What changes on the block

Normal use, direct player breaking and placement into the bound block are cancelled, including for operators. Disabling actions retains this protection. **Remove the binding** to release it; removal does not destroy the block.

This is not protection from every administrator command, other script or natural world change. If the block's type changes, an old binding does not silently attach to its replacement.

Commands run as the activating player and retain permissions, claim and border checks. Held use does not repeat the action continuously. Missing commands and rejected configured syntax can be inspected in the Error Log.

For a reusable form entry point, bind a sequence containing `thm_rmt:form welcome` and grant the intended players both the command and form access described in [Custom Forms](/technical/custom-forms).
