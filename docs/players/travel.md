---
description: "Use Spawn, Back, Death Back, random teleport and requests to other players."
---

# 🧭 Travel and teleport requests

Use Spawn, Back, Death Back, random teleport and requests to other players.


## 📌 Choose a destination

| Feature | Use it for |
| --- | --- |
| Spawn | Return to the realm's normal spawn |
| Back | Return to the saved previous travel location where available |
| Death Back | Return to your saved death location |
| RTP | Find a random permitted, safe landing location |
| TPA | Ask to travel to another player |
| TPHERE | Ask another player to travel to you |

Open **Commands** for the available travel actions, or use the main **Spawn** button. Availability depends on realm policy and your permissions.

## 📌 Send a request

1. Choose **TPA** or **TPHERE** and select a player.
2. Wait for the recipient to accept.
3. Stay ready for the teleport warm-up. The realm can cancel travel for movement or damage.

The recipient's [personal settings](/players/profile) can restrict requests to teammates or block them entirely. Team membership is checked again before travel completes.

## 📌 Cancel the right thing

- **Cancel TP**, or `/thm_rmt:tpcancel`, cancels an active teleport warm-up or landing search.
- `/thm_rmt:tpacancel`, also called `/thm_rmt:tpc`, cancels a teleport request.

Starting a new travel operation replaces your previous one. Leaving the world cancels pending travel.

## ❓ Why a teleport can fail

The destination must still be allowed when travel finishes. Dimension restrictions, borders, claim-entry rules, feature permissions, a changed destination or an unsafe RTP landing can prevent it. RTP has its own radius and cooldown; it is not guaranteed to find a location on every attempt.

See [Homes and warps](/players/homes-warps) for saved destinations, and the [command reference](/reference/commands) for exact parameters.

## 💡 TPA or TPHERE?

If you are at spawn and your friend is at their base, TPA asks to move you to the base. TPHERE asks to bring your friend to your current location. Read the request direction before accepting.

## 🎲 Random teleport

RTP searches within the range and dimensions your realm allows. The initial ordinary radius is 1,000 blocks and cooldown is 20 seconds, though the realm can change both. A border, claim-entry restriction, unsafe terrain or lack of a valid landing can prevent a result. Trying again does not remove the cooldown.

## ↩️ Back and Death Back

Back uses the saved previous RMT travel location. Death Back uses the latest saved death position and dimension. If there is no recorded location, RMT reports that rather than inventing one. These features still obey destination restrictions and are separate from a waypoint marker.
