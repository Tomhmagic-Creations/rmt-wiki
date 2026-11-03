---
description: "Exact group, membership and personal-node command syntax."
---

# 📋 Permission commands

Exact group, membership and personal-node command syntax.


Use the namespace `/thm_rmt:` before these names. The `perm` spelling is the
registered command name, not an alias. Long `permission*` names are no longer
registered, avoiding the vanilla `/permission` name collision. Update saved
commands that used a long name to its `perm*` equivalent. Permission nodes,
arguments and stored permission data are unchanged. RMT's `kick` is unchanged;
use `/thm_rmt:kick` to distinguish it from vanilla `/kick`.

## Groups

Requires thm_rmt:admin.permissions.groups:

```text
permgroupcreate <group> <name> [priority]
permgroupdelete <group> <confirm:true>
permgroupnode <group> <add|remove> <node> [allow|deny] [contexts]
permgroupparent <group> <add|remove> <parent>
```

Groups support multiple parents. Circular inheritance is rejected. The default
group cannot be deleted. JSON editing/replacement commands have been removed;
use the menus for group name/priority changes and automation management.

## Player Memberships

Requires thm_rmt:admin.permissions.assign:

```text
permgroup <playerName> <give|remove> <group>
permgrouptempgive <playerName> <group> <seconds>
```

Temporary grants refresh expiry from now, without stacking. Offline time counts.
They do not shorten permanent membership. Giving a permanent membership promotes
an existing temporary one. Default membership is implicit and cannot be removed.

## Personal Nodes

Requires thm_rmt:admin.permissions.players:

```text
perm <playerName> <give|remove> <node> [allow|deny] [contexts]
permtempgive <playerName> <node> <seconds> [allow|deny] [contexts]
```

Allow is the default. Temporary commands require a positive duration in seconds.
Giving an existing node/context variant replaces that variant. Removing a node
matches its key and contexts, not its allow/deny value. With no contexts, only the
unconditional variant is removed. Because arguments are positional, supply allow
or deny before supplying contexts, including when removing a contextual node.

## Names and Selectors

Names resolve registered online or offline players, case-insensitively. Quote
names containing spaces. Unknown or ambiguous names are rejected; exact registered
player IDs are also accepted. Each player-target command has an online suffix
variant accepting a selector instead, such as permgrouptempgiveonline @s killer 3600.
These are useful for stored commands and events. Both variants support server and
command-block execution. NPC/entity origins are rejected. Player callers still
need the corresponding management permission.

## Context Syntax

Supply one quoted string of comma-separated conditions. All conditions must match.
Every condition is parsed and validated before writes; one invalid entry rejects
the entire command and reports that entry.

```text
/thm_rmt:perm Alex give thm_rmt:build deny "is_in_claim=false,dimension=overworld"
/thm_rmt:perm Alex give thm_rmt:build allow "block_type=stone"
/thm_rmt:permgrouptempgive Alex killer 3600
```

Supported keys:

- dimension, entity_dimension, target_player_dimension: = or != means in/not in.
- item_type, block_type, entity_type: = or != against a type ID.
- actor_tag, item_tag, block_tag, entity_tag, target_player_tag: = or !=.
- entity_family: = or != against a family name.
- in_claim (also is_in_claim): = or != against true/false.
- actor_score(objective), entity_score(objective), target_player_score(objective):
  =, !=, >, >=, < or <= against a number.
- placeholder(namespace:key): = or != against a string, boolean or number.

ID values without a namespace get minecraft: automatically. Custom namespaces
are preserved. Tags, families, objectives, names, group IDs and permission node
keys are not prefixed. Runtime IDs need not currently exist, allowing external
addon identifiers to be configured before they load.

Values can be quoted to include commas: actor_tag='team,red'. Within the outer
Minecraft command string, use single quotes for these values or escape double
quotes. Backslashes escape quotes, commas and backslashes. Quoting a placeholder
comparison value keeps it a string instead of converting true/false or numbers.

## Inspection

Requires thm_rmt:admin.permissions.view:

```text
permnodes [search] [page]
permgroups [page]
permgroupinfo <group>
permplayerinfo <playerName>
permcheck <playerName> <node>
```

Lists show five entries per page; queries return JSON. The last two also have
online variants. Offline checks cannot evaluate runtime player contexts.

## Execution Timing

Commands defer changes to a writable tick and recheck caller permissions and all
targets. Immediate command success means scheduled, not that mutation succeeded.
Do not use it as proof of successful mutation in conditional command sequences.
Later validation errors go to the player or server console.
