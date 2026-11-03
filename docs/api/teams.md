---
description: "Read memberships and team summaries without changing a team."
---

# 🔌 Teams API

Read memberships and team summaries without changing a team.

**Endpoint:** `thm_rmt:api.teams`

Player-based queries can use offline identities. Team summaries omit invitations, homes and shared warps.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [List teams](/api/teams/list) | `list` | Browse current team summaries. |
| [Read a team](/api/teams/get) | `get` | Find a team by its stable ID. |
| [Find a player’s team](/api/teams/get-player-team) | `getPlayerTeam` | Read the team the player currently belongs to. |
| [Read a team role](/api/teams/get-role) | `getRole` | Read the player’s current role inside their team. |
| [Compare two players](/api/teams/are-teammates) | `areTeammates` | Check whether two recorded player identities share a team. |

## Example: show team-only help

Read the player's team. A null result means they are unteamed. Use getRole if the content should distinguish owner, admin and ordinary member.

Use areTeammates for two players rather than comparing names or assuming two unteamed players share a team.

## Data lifetime

Read-only. No runtime resource is created by these queries.
