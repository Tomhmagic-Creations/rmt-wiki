---
description: "Run a saved action when a chosen event happens and its conditions match."
---

# 🛠️ Events

Run a saved action when a chosen event happens and its conditions match.


**Find it:** Technical > Events. Access requires `thm_rmt:admin.events`. Create the [Stored Command](/technical/stored-commands) first.

## 📌 Set up one event binding

This example broadcasts a message when a player is hurt by a zombie.

1. Create a Stored Command with ID `zombie_warning` and text `thm_rmt:announce "%thm_rmt:event(hurtEntity.name)% was hurt by a zombie"`.
2. Open **Technical > Events** and create a binding. New bindings start disabled.
3. Under **When**, select `entityHurt`.
4. Under **Only If**, add `hurtEntity.typeId = minecraft:player`.
5. Add another condition: `damageSource.damagingEntity.typeId = minecraft:zombie`.
6. Set **Run As** to dimension execution. Set a fallback dimension if requested by the editor.
7. Add `zombie_warning` under **Stored Commands**.
8. Set a suitable cooldown, enable the binding and save the complete binding.
9. Test with a zombie and inspect Diagnostics if nothing happens. This broadcasts to all online players, so use a test world while configuring it.

Dimension execution supplies the command authority without requiring ordinary players to hold the broadcast permission. The captured `hurtEntity.name` field identifies the victim. If you choose an entity executor instead, its command permissions apply and `@s` refers to that entity.

## 📌 Editor fields

| Field | Meaning |
| --- | --- |
| When | The exact event that starts evaluation |
| Only If | All conditions must match; up to 20 |
| Run As | The event entity, an offered collection, or dimension execution |
| Stored Commands | One to five existing sequences in order |
| Cooldown | Shared by the whole binding, not separately per player |

Use **playerSpawn** when you need a loaded player. Join/leave events provide identity fields without guaranteeing a usable player executor. Removed or dead executors are skipped, not replaced by another player.

## 📌 Fields and placeholders

Field conditions inspect the event's captured values. Placeholder conditions choose a subject and compare a supported placeholder's actual value. Player placeholders require a player subject. All conditions must match, and their changes only activate after the binding itself is saved.

For broken blocks, use `brokenBlockPermutation.type.id`, not `block.typeId`, which can describe the air left behind.

```text
%thm_rmt:event(hurtEntity.name)%
%thm_rmt:event(damage)%
%thm_rmt:event(brokenBlockPermutation.type.id)%
```

Paths are case-sensitive. Missing values fail ordinary comparisons, including Not Equal. Use Exists/Is Missing when testing optional fields. Numbers compare numerically; strings and booleans use equality or inequality.

## ❓ Execution and troubleshooting

These are after-events: they cannot cancel the original action. Commands are queued for a writable tick. Dimension execution uses event location/dimension where available, or the configured fallback; it supplies no `@s`.

Diagnostics distinguishes skipped conditions, missing executors, cooldowns, failed commands and paused loops. Reset clears runtime state; it does not replay missed actions. Review an accidental loop before resetting a pause. A failure can leave earlier actions completed, with no rollback.

Script-event bindings require an exact namespaced ID equality condition. Also filter the source appropriately: matching an ID alone does not authenticate a sender.

See [event fields](/reference/events) and [tutorials](/tutorials/) for working combinations.
