---
description: "Save named world or player values for displays and automation."
---

# 🛠️ Metadata

Save named world or player values for displays and automation.


1. Open **Technical > Metadata**.
2. Choose the world or a registered player, including an offline player.
3. Add a key, choose its type and enter the value.
4. Save, then read it using a supported placeholder or typed get command.

Values can be text, booleans, finite numbers or 3D coordinates. Keys are case-sensitive; use a consistent name such as `event_points`.

## 💡 Examples

```text
/thm_rmt:metadatastring world event_name "Treasure Hunt"
/thm_rmt:metadatabool player eligible true @s
/thm_rmt:metadatanumber player event_points 25 @s
/thm_rmt:metadatavector world checkpoint 10 70 -20
/thm_rmt:metadatanumberget player event_points @s
```

World scope has no player selector. Player scope defaults to a player sender; a command block/server must supply targets. Typed get commands require a player sender and fail if the stored value is another type. Delete values in the Technical editor.

## 📌 Use it in text

```text
Event: %thm_rmt:world_metadata(event_name)%
Your points: %thm_rmt:player_metadata(event_points)%
```

Zero, false and empty text are valid saved values; they differ from a missing key. Metadata is feature data, not a secret store. Non-player entity metadata has separate utility commands and needs a valid entity context. Addon API metadata is namespaced and persistent; see [API metadata](/api/metadata).
