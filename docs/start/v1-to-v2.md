---
description: "Find the V2 names and controls for familiar V1 features and settings."
---

# V1-to-V2 reference

Use this page to find the V2 names and controls for features and settings you used in V1.

## Names and features

| In V1 | In V2 | What changed |
| --- | --- | --- |
| Ranks | Permission Groups | Groups control access, limits and prefixes. Players can belong to several groups. |
| Admin Rank Name / Moderator Rank Name | Staff permission groups | Staff access comes from permissions, not the group's name. |
| Automatic rank awards | Permission Group Automation | Conditions determine when a player receives a group. |
| Rank priority | Group priority | Conversion preserves the intended order, but higher numbers now mean higher priority. |
| Claim Chunks balance | Claim Allowance | Available allowance is what remains after claimed land is counted. Land is still measured in chunks. |
| Starting Claim Chunks | Starting Claim Allowance | Sets the starting claim allowance. |
| Claim Chunk Earn Frequency | Claim Allowance Earn Frequency | Sets how often players earn claim allowance. |
| Claim Permissions | Claim Rules | Owners choose who each rule allows. |
| Claim Flags | Claim Options | Controls such as explosions and damage within a claim. |
| Trusted ranks within claims | Trusted players | Rank-based claim access is no longer supported. Review trusted players because old rank audiences are not preserved exactly. |
| Rank-restricted realm warps | Individual-warp permissions | Warp access is now controlled through permissions. |
| Chunk Viewer item | Chunk Viewer personal setting | Enable it under **Profile > Personal Settings**. The item has been removed. |
| Fixed kills, monster kills, deaths and playtime counters | Stats | View stats through **Profile**. Existing counters carry over; administrators manage stat definitions. |
| Holograms | Updated hologram display system | Placement and editing items remain. Old hit/interact actions need configuring again. |
| Older Interactive Commands bindings | Stored Commands and interaction actions | Recreate old bindings using the appropriate interaction feature. Those bindings are not automatically imported. |
| Hard-coded lockable blocks | Lockable Blocks list | Administrators can configure which blocks players may lock. |
| Realm Tool crafting recipe | `/tool` | The recipe has been removed. Players can obtain the tool through `/tool` if permitted, or through the automatic-give setting. |
| Inventory viewing | Updated Invsee | Inventory, hotbar, equipment and Ender Chest access have separate permissions. Offline viewing and editing use optional Saved Inventories. |
| Separate temporary/permanent ban choices | Ban with an optional duration | A duration makes the ban temporary. Omitting it makes the ban permanent and requires permanent-ban permission. |

## Settings now controlled by permissions

These controls can now vary between groups or individual players. Use [Permissions and groups](/admin/permissions) to manage access and limits.

| V1 setting | V2 control | What to know |
| --- | --- | --- |
| Disable Spawn | Spawn feature and command permissions | Control access through permissions. |
| Disable Warps | Warp feature, command and individual-warp permissions | Control general access and access to each warp. |
| Disable TPA/TPHERE | Separate TPA and TPHERE access permissions | Control each request type separately. |
| Disable RTP | RTP feature and command permissions | Control access through permissions. |
| Disable TP Back | Back feature and command permissions | Control access through permissions. |
| Disable Death Back | Death Back feature and command permissions | Control access through permissions. |
| Teleport Timer | Teleport delay permission | Set the teleport delay through permissions. |
| Maximum Homes | Home limit permission | Home feature and command access are controlled separately. |
| Maximum Player Warps | Player-warp limit permission | Feature and command access are controlled separately. |
| RTP Radius / RTP Cooldown | Numeric RTP permissions | Set the radius and cooldown through permissions. |
| RTP in Nether / RTP in End | RTP permissions for each dimension | Control RTP access in each dimension. |
| Disable Claims | Claim-creation permission | Denying claim creation does not disable protection on existing claims. |
| Claim Nether / Claim The End | Claim-creation permissions for each dimension | Control where players can create claims. |
| Claim Chunk Earn Amount | Claim allowance earning-amount permission | Set how much allowance players earn each time. |
| Claim Chunk Max | Maximum automatic claim allowance earnings | This limits lifetime automatic earnings, not just the current balance. |
| Mod/Admin Only Holograms | Hologram access permissions | Grant access only to the intended groups. |
| Max Holograms | Maximum holograms permission | Set how many holograms a player may own. |
| Hologram Limit / Hologram Radius | Nearby hologram limit and radius permissions | Set the nearby hologram limit and the radius it covers. |
| Mod AFK | AFK bypass permission | Grant the bypass to the intended groups or players. |
| Mod Gamemode | Game-mode feature and command permissions | Grant access to the intended groups or players. |
| Spy Creative | Creative Spy permission | Grant access to the intended groups or players. |
| Nether Locked / End Locked | Per-dimension entry and portal-activation permissions | Control dimension entry and portal activation separately. |

## Other changed settings

| V1 setting | In V2 | What changed |
| --- | --- | --- |
| Overworld / Nether / End Claim Min Y and Max Y | Claim Protection Heights | Choose a dimension, then set the lowest and highest Y levels where claims protect blocks and players. |
| Banned Items Frequency | Removed | Banned-item checks respond to relevant actions instead of a configurable scanning interval. |
