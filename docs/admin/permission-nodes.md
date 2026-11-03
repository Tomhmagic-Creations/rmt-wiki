---
description: "Choose an ability, grant or deny it, and save the correct group or personal draft."
---

# 🔐 Assign permission nodes

Choose an ability, grant or deny it, and save the correct group or personal draft.


## ❓ What is a node?

A permission node is the name of one ability or value. `thm_rmt:feature.home` controls Home access; `thm_rmt:homes.max=(5)` assigns a numeric limit. They are different jobs, and the command used to reach a feature can require a third node.

## 📌 Add a group permission

1. Open **Admin > Permissions > View Permissions** and search the ability.
2. Read its full key, description and value type.
3. Open the intended group and add that node.
4. Choose Allow or Deny. For a data permission, include its value in parentheses.
5. Save the node draft, then save the containing group.
6. Test as a player assigned to that group, without native operator bypass.

Suggestions insert text; they do not grant or save it. An external addon can supply extra descriptions while installed. Valid external grants can remain even if that addon's catalogue is temporarily absent.

## 💡 Allow five homes

```text
/thm_rmt:permgroupnode default add thm_rmt:feature.home allow
/thm_rmt:permgroupnode default add "thm_rmt:homes.max=(5)" allow
/thm_rmt:permgroupnode default add thm_rmt:command.home allow
/thm_rmt:permgroupnode default add thm_rmt:command.homes allow
/thm_rmt:permgroupnode default add thm_rmt:command.sethome allow
/thm_rmt:permgroupnode default add thm_rmt:command.delhome allow
```

Use the command nodes players actually need. A command grant does not supply feature access or capacity by itself.

## 👤 Personal exceptions

Open Player Permissions for a registered player and add a personal node when the change belongs only to that account. Personal assignments take precedence over group assignments. Avoid an unexplained personal exception if a reusable group would make the policy clearer.

## 📋 Finding exact names

The Admin menu and sidebar expose the permission catalogue directly, divided into Player features, Claims, Moderation, Administration, Technical features, Commands and Personal settings. Permission Commands has the exact command syntax on its own page.
