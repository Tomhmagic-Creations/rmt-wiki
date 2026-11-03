---
description: "Create shared destinations and distinguish normal spawn from first-join spawn."
---

# ⚙️ Spawn and realm warps

Create shared destinations and distinguish normal spawn from first-join spawn.


## 📌 Set spawn

1. Stand at the intended location and face the direction arrivals should face.
2. Open **Admin > Manage Spawn**.
3. Set the normal custom spawn, or set the first-join spawn for new arrivals.
4. Test with the Spawn action; test a genuine first arrival separately if using first-join spawn.

| Destination | Used for |
| --- | --- |
| Minecraft default world spawn | The vanilla Overworld spawn and fallback |
| RMT normal custom spawn | The Spawn button/command and normal spawn waypoint |
| RMT first-join spawn | A player's first entry |

Removing a custom destination returns to the normal Minecraft fallback. First-join spawn is not used for the normal spawn marker.

## 📌 Make a realm warp

Open **Admin > Manage Warps**, add the destination using the editor, name it and save. Test it from **Warps** as the intended player group. Access requires the Warps feature and a matching `thm_rmt:warp=(warpName)` grant.

See [VIP destination tutorial](/tutorials/vip-area) for a restricted warp. Realm warps, player warps and team warps have different owners and access rules.

## 📌 Spawn Dimension Build

The separate build workflow prepares the special spawn dimension; it does not change any spawn destination automatically. The current documented build catalogue is empty, so do not expect bundled buildings in that menu yet.

When a build is available, inspect it before setting a normal spawn there. Placement may overwrite blocks with structure air. Visit becomes available after successful placement; Exit uses the saved return location. Keep people out of the dimension while replacing a building.
