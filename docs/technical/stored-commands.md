---
description: "Save one named sequence, then run it directly or attach it to another feature."
---

# 🛠️ Stored Commands

Save one named sequence, then run it directly or attach it to another feature.


**Find it:** Technical > Stored Commands. Create/edit permissions belong only with trusted staff.

## 📌 Set up your first sequence

1. Open Stored Commands and create a sequence with the ID `welcome`.
2. Add `say Welcome to the realm` as its first command. Do not include a leading slash.
3. Add or append more entries if needed, keeping them in the intended order.
4. Save, then test it as yourself using `/thm_rmt:storedcommand welcome`.
5. Select the same ID in a form, event, NPC or other action editor to reuse it.

The same setup through commands:

```text
/thm_rmt:storedcommandadd "say Welcome to the realm" welcome
/thm_rmt:storedcommandappend welcome "say Please read the rules"
/thm_rmt:storedcommand welcome
```

## 📌 Entry controls

| Control | Use |
| --- | --- |
| Edit | Replaces the selected command entry |
| Append | Adds an entry at the end |
| Move | Changes the entry order |
| Conditional | Runs only if the immediately previous command reports success |
| Remove entry | Deletes one entry, leaving the sequence |
| Delete sequence | Removes the ID and stops linked features using it |

Positions start at 1. A sequence holds 1–100 commands. The first entry is always unconditional. Conditional entries skip after a failure or skip; a later unconditional entry can still run.

## 💡 A conditional example

```text
/thm_rmt:storedcommandadd "testfor @s[tag=builder]" builder_message
/thm_rmt:storedcommandappend builder_message "say A builder is ready" true
```

Run this with an actual player executor. The second entry runs only when the tag test reports success. Conditional does not mean once-per-player, delayed execution or rollback.

## 📌 Know who runs it

Form, NPC, crate, portal and bound-block actions normally run as the activating player. `@s` refers to that player and their authority. Technical Events can instead choose an event entity or dimension execution. Dimension execution has no `@s`; target a captured ID when needed.

Placeholders resolve just before each entry. Missing required values fail command resolution. Quote commands containing spaces and escape embedded quotes for Minecraft's parser.

There is no automatic rollback or retry. Commands that schedule work may report success before that work finishes. Test permissions, targets and inventory space before using a sequence as a reward.

Long commands over the form's 100-character input limit must be edited through commands. See the [command reference](/reference/commands) for all editing parameters.
