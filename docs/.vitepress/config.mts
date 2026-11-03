import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RMT Wiki',
  description: 'Practical guides for Realm Management Tool V2: players, realm owners and addon creators.',
  lang: 'en-GB', cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/assets/images/realm_tool.png' }], ['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    logo: '/assets/images/realm_tool.png', siteTitle: 'RMT Wiki',
    search: { provider: 'local' }, outline: { level: [2, 3], label: 'On this page' },
    nav: [
  {
    "text": "Getting Started",
    "items": [
      {
        "text": "Start using RMT",
        "link": "/start/first-steps"
      },
      {
        "text": "Finding your way",
        "link": "/start/finding-your-way"
      },
      {
        "text": "V1 → V2",
        "link": "/start/v1-to-v2"
      },
      {
        "text": "Items and recipes",
        "link": "/reference/items"
      }
    ]
  },
  {
    "text": "Claims",
    "items": [
      {
        "text": "What is a claim?",
        "link": "/claims/what-is-a-claim"
      },
      {
        "text": "Create a claim",
        "link": "/claims/getting-started"
      },
      {
        "text": "Rules and trust",
        "link": "/claims/rules-trust"
      },
      {
        "text": "Subclaims",
        "link": "/claims/subclaims"
      },
      {
        "text": "Claim Allowance",
        "link": "/claims/allowance"
      },
      {
        "text": "Remove or transfer land",
        "link": "/claims/manage-land"
      }
    ]
  },
  {
    "text": "Players",
    "items": [
      {
        "text": "RMT Menu",
        "items": [
          {
            "text": "Realm Tool",
            "link": "/players/realm-tool"
          },
          {
            "text": "Profile and personal settings",
            "link": "/players/profile"
          },
          {
            "text": "Travel and teleport requests",
            "link": "/players/travel"
          },
          {
            "text": "Homes",
            "link": "/players/homes"
          },
          {
            "text": "Realm warps",
            "link": "/players/warps"
          },
          {
            "text": "Player Warps",
            "link": "/players/player-warps"
          },
          {
            "text": "Teams",
            "link": "/players/teams"
          },
          {
            "text": "Waypoints",
            "link": "/players/waypoints"
          },
          {
            "text": "Mail",
            "link": "/players/mail"
          },
          {
            "text": "Streamer Mode",
            "link": "/players/streamer-mode"
          },
          {
            "text": "Claim a kit",
            "link": "/players/kits"
          },
          {
            "text": "Open a crate",
            "link": "/players/crates"
          },
          {
            "text": "Realm Store",
            "link": "/players/store"
          },
          {
            "text": "Your statistics",
            "link": "/players/stats"
          },
          {
            "text": "Your holograms",
            "link": "/players/holograms"
          },
          {
            "text": "Report a player",
            "link": "/players/reports"
          }
        ]
      },
      {
        "text": "Building and tools",
        "items": [
          {
            "text": "Chunk and claim outlines",
            "link": "/building/chunk-viewer"
          },
          {
            "text": "Locks",
            "link": "/building/locks"
          },
          {
            "text": "Sorting inventories",
            "link": "/building/sorting"
          },
          {
            "text": "Elevators, jump pads and doors",
            "link": "/building/tools"
          }
        ]
      }
    ]
  },
  {
    "text": "Moderation",
    "items": [
      {
        "text": "Player actions",
        "link": "/moderation/player-actions"
      },
      {
        "text": "Review reports",
        "link": "/moderation/reports"
      },
      {
        "text": "Invsee",
        "link": "/moderation/inventories"
      },
      {
        "text": "Action Log",
        "link": "/moderation/action-log"
      },
      {
        "text": "Banned items",
        "link": "/moderation/banned-items"
      },
      {
        "text": "Broadcast mail",
        "link": "/moderation/broadcast-mail"
      }
    ]
  },
  {
    "text": "Admin",
    "items": [
      {
        "text": "Realm setup",
        "items": [
          {
            "text": "First realm setup",
            "link": "/admin/first-setup"
          },
          {
            "text": "Permissions and groups",
            "link": "/admin/permissions"
          },
          {
            "text": "Spawn and realm warps",
            "link": "/admin/spawn"
          },
          {
            "text": "Announcements",
            "link": "/admin/announcements"
          },
          {
            "text": "Nameplates",
            "link": "/admin/nameplates"
          },
          {
            "text": "Create and manage kits",
            "link": "/admin/kits"
          },
          {
            "text": "Create and manage crates",
            "link": "/admin/crates"
          },
          {
            "text": "Realm Store",
            "link": "/admin/store"
          },
          {
            "text": "Player cleanup and retention",
            "link": "/admin/cleanup"
          },
          {
            "text": "Dimension access",
            "link": "/admin/dimension-access"
          },
          {
            "text": "Edit Main Menu",
            "link": "/admin/main-menu"
          }
        ]
      },
      {
        "text": "Permissions",
        "items": [
          {
            "text": "Groups and membership",
            "link": "/admin/permissions"
          },
          {
            "text": "Assign permission nodes",
            "link": "/admin/permission-nodes"
          },
          {
            "text": "Contexts and temporary access",
            "link": "/admin/permission-contexts"
          },
          {
            "text": "Priority and troubleshooting",
            "link": "/admin/permission-priority"
          },
          {
            "text": "Permission commands",
            "link": "/reference/permission-commands"
          }
        ]
      },
      {
        "text": "Claim administration",
        "items": [
          {
            "text": "Realm claim rules",
            "link": "/admin/claim-rules"
          },
          {
            "text": "Manage claims",
            "link": "/admin/claims"
          },
          {
            "text": "Configure Claim Allowance",
            "link": "/admin/claim-allowance"
          }
        ]
      },
      {
        "text": "Moderation and tool policy",
        "items": [
          {
            "text": "Saved inventories setup",
            "link": "/admin/saved-inventories"
          },
          {
            "text": "Punishment automation",
            "link": "/admin/punishment-automation"
          },
          {
            "text": "Sorting administration",
            "link": "/admin/locks-sorting"
          }
        ]
      },
      {
        "text": "Permission catalogue",
        "items": [
          {
            "text": "Player feature permissions",
            "link": "/reference/permissions/player"
          },
          {
            "text": "Claim permissions",
            "link": "/reference/permissions/claims"
          },
          {
            "text": "Moderation permissions",
            "link": "/reference/permissions/moderation"
          },
          {
            "text": "Administration permissions",
            "link": "/reference/permissions/admin"
          },
          {
            "text": "Technical permissions",
            "link": "/reference/permissions/technical"
          },
          {
            "text": "Command permissions",
            "link": "/reference/permissions/commands"
          },
          {
            "text": "Personal-setting permissions",
            "link": "/reference/permissions/profile"
          },
          {
            "text": "Initial group grants",
            "link": "/reference/permissions/defaults"
          }
        ]
      },
      {
        "text": "Reference",
        "items": [
          {
            "text": "Settings reference",
            "link": "/reference/settings"
          },
          {
            "text": "Game rule reference",
            "link": "/reference/game-rules"
          }
        ]
      }
    ]
  },
  {
    "text": "Settings",
    "items": [
      {
        "text": "General",
        "link": "/settings/general"
      },
      {
        "text": "Claiming",
        "link": "/settings/claiming"
      },
      {
        "text": "Mail",
        "link": "/settings/mail"
      },
      {
        "text": "Teleport",
        "link": "/settings/teleport"
      },
      {
        "text": "AFK",
        "link": "/settings/afk"
      },
      {
        "text": "Moderation",
        "link": "/settings/moderation"
      },
      {
        "text": "Lockable Blocks",
        "link": "/settings/lockable-blocks"
      },
      {
        "text": "Action Log Settings",
        "link": "/settings/action-log"
      },
      {
        "text": "World Borders",
        "link": "/settings/world-borders"
      }
    ]
  },
  {
    "text": "Technical",
    "items": [
      {
        "text": "Feature setup",
        "items": [
          {
            "text": "Stored Commands",
            "link": "/technical/stored-commands"
          },
          {
            "text": "Events",
            "link": "/technical/events"
          },
          {
            "text": "Placeholders",
            "link": "/technical/placeholders"
          },
          {
            "text": "Custom Forms",
            "link": "/technical/custom-forms"
          },
          {
            "text": "Stats",
            "link": "/technical/stats"
          },
          {
            "text": "Scoreboards",
            "link": "/technical/scoreboards"
          },
          {
            "text": "Group automation",
            "link": "/technical/group-automation"
          },
          {
            "text": "Metadata",
            "link": "/technical/metadata"
          },
          {
            "text": "Custom Loot",
            "link": "/technical/custom-loot"
          },
          {
            "text": "Holograms",
            "link": "/technical/holograms"
          },
          {
            "text": "NPCs",
            "link": "/technical/npcs"
          },
          {
            "text": "Portals",
            "link": "/technical/portals"
          },
          {
            "text": "Block Commands",
            "link": "/technical/block-commands"
          },
          {
            "text": "Utility commands",
            "link": "/technical/utility-commands"
          },
          {
            "text": "Error Log",
            "link": "/technical/error-log"
          }
        ]
      },
      {
        "text": "Reference",
        "items": [
          {
            "text": "Command reference",
            "link": "/reference/commands"
          },
          {
            "text": "Placeholder reference",
            "link": "/reference/placeholders"
          },
          {
            "text": "Event fields",
            "link": "/reference/events"
          },
          {
            "text": "Items and recipes",
            "link": "/reference/items"
          },
          {
            "text": "Permission commands",
            "link": "/reference/permission-commands"
          }
        ]
      }
    ]
  },
  {
    "text": "Tutorials",
    "items": [
      {
        "text": "Announce AFK changes",
        "link": "/tutorials/afk-announcements"
      },
      {
        "text": "Award a Builder group",
        "link": "/tutorials/builder-award"
      },
      {
        "text": "Create a VIP destination",
        "link": "/tutorials/vip-area"
      },
      {
        "text": "Build a shared team base",
        "link": "/tutorials/team-base"
      },
      {
        "text": "Build an information NPC",
        "link": "/tutorials/information-npc"
      },
      {
        "text": "Build a kill leaderboard",
        "link": "/tutorials/kill-leaderboard"
      },
      {
        "text": "Create a random supply crate",
        "link": "/tutorials/loot-crate"
      }
    ]
  },
  {
    "text": "References",
    "items": [
      {
        "text": "Command reference",
        "link": "/reference/commands"
      },
      {
        "text": "Permission catalogue",
        "link": "/reference/permissions"
      },
      {
        "text": "Settings reference",
        "link": "/reference/settings"
      },
      {
        "text": "Placeholder reference",
        "link": "/reference/placeholders"
      },
      {
        "text": "Event fields",
        "link": "/reference/events"
      },
      {
        "text": "Game rule reference",
        "link": "/reference/game-rules"
      },
      {
        "text": "Items and recipes",
        "link": "/reference/items"
      },
      {
        "text": "Permission commands",
        "link": "/reference/permission-commands"
      }
    ]
  },
  {
    "text": "API",
    "items": [
      {
        "text": "Start here",
        "items": [
          {
            "text": "Quick start",
            "link": "/api/getting-started"
          },
          {
            "text": "Shared request helper",
            "link": "/api/request-helper"
          },
          {
            "text": "Register namespace",
            "link": "/api/register"
          },
          {
            "text": "Unregister namespace",
            "link": "/api/unregister"
          }
        ]
      },
      {
        "text": "Endpoints",
        "items": [
          {
            "text": "Permissions",
            "link": "/api/permissions"
          },
          {
            "text": "Claims",
            "link": "/api/claims"
          },
          {
            "text": "Holograms",
            "link": "/api/holograms"
          },
          {
            "text": "Player data",
            "link": "/api/player_data"
          },
          {
            "text": "Teams",
            "link": "/api/teams"
          },
          {
            "text": "Waypoints",
            "link": "/api/waypoints"
          },
          {
            "text": "Events",
            "link": "/api/events"
          },
          {
            "text": "Metadata",
            "link": "/api/metadata"
          },
          {
            "text": "Stats",
            "link": "/api/stats"
          },
          {
            "text": "Stored Commands",
            "link": "/api/stored_commands"
          },
          {
            "text": "World Borders",
            "link": "/api/world_borders"
          },
          {
            "text": "Menus",
            "link": "/api/menus"
          },
          {
            "text": "Placeholders",
            "link": "/api/placeholders"
          }
        ]
      }
    ]
  }
],
    sidebar: {
  "/start/": [
    {
      "text": "Getting Started",
      "collapsed": false,
      "items": [
        {
          "text": "Start using RMT",
          "link": "/start/first-steps"
        },
        {
          "text": "Finding your way",
          "link": "/start/finding-your-way"
        },
        {
          "text": "V1 → V2",
          "link": "/start/v1-to-v2"
        },
        {
          "text": "Items and recipes",
          "link": "/reference/items"
        }
      ]
    }
  ],
  "/players/": [
    {
      "text": "Player guides",
      "collapsed": false,
      "items": [
        {
          "text": "Realm Tool",
          "link": "/players/realm-tool"
        },
        {
          "text": "Profile and personal settings",
          "link": "/players/profile"
        },
        {
          "text": "Travel and teleport requests",
          "link": "/players/travel"
        },
        {
          "text": "Homes",
          "link": "/players/homes"
        },
        {
          "text": "Realm warps",
          "link": "/players/warps"
        },
        {
          "text": "Player Warps",
          "link": "/players/player-warps"
        },
        {
          "text": "Teams",
          "link": "/players/teams"
        },
        {
          "text": "Waypoints",
          "link": "/players/waypoints"
        },
        {
          "text": "Mail",
          "link": "/players/mail"
        },
        {
          "text": "Streamer Mode",
          "link": "/players/streamer-mode"
        },
        {
          "text": "Claim a kit",
          "link": "/players/kits"
        },
        {
          "text": "Open a crate",
          "link": "/players/crates"
        },
        {
          "text": "Realm Store",
          "link": "/players/store"
        },
        {
          "text": "Your statistics",
          "link": "/players/stats"
        },
        {
          "text": "Your holograms",
          "link": "/players/holograms"
        },
        {
          "text": "Report a player",
          "link": "/players/reports"
        }
      ]
    },
    {
      "text": "Building and tools",
      "collapsed": false,
      "items": [
        {
          "text": "Chunk and claim outlines",
          "link": "/building/chunk-viewer"
        },
        {
          "text": "Locks",
          "link": "/building/locks"
        },
        {
          "text": "Sorting inventories",
          "link": "/building/sorting"
        },
        {
          "text": "Elevators, jump pads and doors",
          "link": "/building/tools"
        }
      ]
    }
  ],
  "/building/": [
    {
      "text": "Building and tools",
      "collapsed": false,
      "items": [
        {
          "text": "Chunk and claim outlines",
          "link": "/building/chunk-viewer"
        },
        {
          "text": "Locks",
          "link": "/building/locks"
        },
        {
          "text": "Sorting inventories",
          "link": "/building/sorting"
        },
        {
          "text": "Elevators, jump pads and doors",
          "link": "/building/tools"
        }
      ]
    },
    {
      "text": "Player guides",
      "collapsed": false,
      "items": [
        {
          "text": "Realm Tool",
          "link": "/players/realm-tool"
        },
        {
          "text": "Profile and personal settings",
          "link": "/players/profile"
        },
        {
          "text": "Travel and teleport requests",
          "link": "/players/travel"
        },
        {
          "text": "Homes",
          "link": "/players/homes"
        },
        {
          "text": "Realm warps",
          "link": "/players/warps"
        },
        {
          "text": "Player Warps",
          "link": "/players/player-warps"
        },
        {
          "text": "Teams",
          "link": "/players/teams"
        },
        {
          "text": "Waypoints",
          "link": "/players/waypoints"
        },
        {
          "text": "Mail",
          "link": "/players/mail"
        },
        {
          "text": "Streamer Mode",
          "link": "/players/streamer-mode"
        },
        {
          "text": "Claim a kit",
          "link": "/players/kits"
        },
        {
          "text": "Open a crate",
          "link": "/players/crates"
        },
        {
          "text": "Realm Store",
          "link": "/players/store"
        },
        {
          "text": "Your statistics",
          "link": "/players/stats"
        },
        {
          "text": "Your holograms",
          "link": "/players/holograms"
        },
        {
          "text": "Report a player",
          "link": "/players/reports"
        }
      ]
    }
  ],
  "/claims/": [
    {
      "text": "Player claims",
      "collapsed": false,
      "items": [
        {
          "text": "What is a claim?",
          "link": "/claims/what-is-a-claim"
        },
        {
          "text": "Create a claim",
          "link": "/claims/getting-started"
        },
        {
          "text": "Rules and trust",
          "link": "/claims/rules-trust"
        },
        {
          "text": "Subclaims",
          "link": "/claims/subclaims"
        },
        {
          "text": "Claim Allowance",
          "link": "/claims/allowance"
        },
        {
          "text": "Remove or transfer land",
          "link": "/claims/manage-land"
        }
      ]
    }
  ],
  "/moderation/": [
    {
      "text": "Moderation",
      "collapsed": false,
      "items": [
        {
          "text": "Player actions",
          "link": "/moderation/player-actions"
        },
        {
          "text": "Review reports",
          "link": "/moderation/reports"
        },
        {
          "text": "Invsee",
          "link": "/moderation/inventories"
        },
        {
          "text": "Action Log",
          "link": "/moderation/action-log"
        },
        {
          "text": "Banned items",
          "link": "/moderation/banned-items"
        },
        {
          "text": "Broadcast mail",
          "link": "/moderation/broadcast-mail"
        }
      ]
    }
  ],
  "/admin/": [
    {
      "text": "Administration",
      "collapsed": false,
      "items": [
        {
          "text": "First realm setup",
          "link": "/admin/first-setup"
        },
        {
          "text": "Spawn and realm warps",
          "link": "/admin/spawn"
        },
        {
          "text": "Announcements",
          "link": "/admin/announcements"
        },
        {
          "text": "Nameplates",
          "link": "/admin/nameplates"
        },
        {
          "text": "Create and manage kits",
          "link": "/admin/kits"
        },
        {
          "text": "Create and manage crates",
          "link": "/admin/crates"
        },
        {
          "text": "Realm Store",
          "link": "/admin/store"
        },
        {
          "text": "Player cleanup and retention",
          "link": "/admin/cleanup"
        },
        {
          "text": "Dimension access",
          "link": "/admin/dimension-access"
        },
        {
          "text": "Edit Main Menu",
          "link": "/admin/main-menu"
        }
      ]
    },
    {
      "text": "Permissions",
      "collapsed": false,
      "items": [
        {
          "text": "Groups and membership",
          "link": "/admin/permissions"
        },
        {
          "text": "Assign permission nodes",
          "link": "/admin/permission-nodes"
        },
        {
          "text": "Contexts and temporary access",
          "link": "/admin/permission-contexts"
        },
        {
          "text": "Priority and troubleshooting",
          "link": "/admin/permission-priority"
        },
        {
          "text": "Permission commands",
          "link": "/reference/permission-commands"
        }
      ]
    },
    {
      "text": "Claim administration",
      "collapsed": false,
      "items": [
        {
          "text": "Realm claim rules",
          "link": "/admin/claim-rules"
        },
        {
          "text": "Manage claims",
          "link": "/admin/claims"
        },
        {
          "text": "Configure Claim Allowance",
          "link": "/admin/claim-allowance"
        }
      ]
    },
    {
      "text": "Moderation and tool policy",
      "collapsed": false,
      "items": [
        {
          "text": "Saved inventories setup",
          "link": "/admin/saved-inventories"
        },
        {
          "text": "Punishment automation",
          "link": "/admin/punishment-automation"
        },
        {
          "text": "Sorting administration",
          "link": "/admin/locks-sorting"
        }
      ]
    },
    {
      "text": "Permission catalogue",
      "collapsed": false,
      "items": [
        {
          "text": "Player feature permissions",
          "link": "/reference/permissions/player"
        },
        {
          "text": "Claim permissions",
          "link": "/reference/permissions/claims"
        },
        {
          "text": "Moderation permissions",
          "link": "/reference/permissions/moderation"
        },
        {
          "text": "Administration permissions",
          "link": "/reference/permissions/admin"
        },
        {
          "text": "Technical permissions",
          "link": "/reference/permissions/technical"
        },
        {
          "text": "Command permissions",
          "link": "/reference/permissions/commands"
        },
        {
          "text": "Personal-setting permissions",
          "link": "/reference/permissions/profile"
        },
        {
          "text": "Initial group grants",
          "link": "/reference/permissions/defaults"
        }
      ]
    },
    {
      "text": "Other references",
      "collapsed": false,
      "items": [
        {
          "text": "Command reference",
          "link": "/reference/commands"
        },
        {
          "text": "Settings reference",
          "link": "/reference/settings"
        },
        {
          "text": "Placeholder reference",
          "link": "/reference/placeholders"
        },
        {
          "text": "Event fields",
          "link": "/reference/events"
        },
        {
          "text": "Game rule reference",
          "link": "/reference/game-rules"
        },
        {
          "text": "Items and recipes",
          "link": "/reference/items"
        },
        {
          "text": "Permission commands",
          "link": "/reference/permission-commands"
        }
      ]
    }
  ],
  "/technical/": [
    {
      "text": "Technical setup · administrators",
      "collapsed": false,
      "items": [
        {
          "text": "Stored Commands",
          "link": "/technical/stored-commands"
        },
        {
          "text": "Events",
          "link": "/technical/events"
        },
        {
          "text": "Placeholders",
          "link": "/technical/placeholders"
        },
        {
          "text": "Custom Forms",
          "link": "/technical/custom-forms"
        },
        {
          "text": "Stats",
          "link": "/technical/stats"
        },
        {
          "text": "Scoreboards",
          "link": "/technical/scoreboards"
        },
        {
          "text": "Group automation",
          "link": "/technical/group-automation"
        },
        {
          "text": "Metadata",
          "link": "/technical/metadata"
        },
        {
          "text": "Custom Loot",
          "link": "/technical/custom-loot"
        },
        {
          "text": "Holograms",
          "link": "/technical/holograms"
        },
        {
          "text": "NPCs",
          "link": "/technical/npcs"
        },
        {
          "text": "Portals",
          "link": "/technical/portals"
        },
        {
          "text": "Block Commands",
          "link": "/technical/block-commands"
        },
        {
          "text": "Utility commands",
          "link": "/technical/utility-commands"
        },
        {
          "text": "Error Log",
          "link": "/technical/error-log"
        }
      ]
    },
    {
      "text": "Reference",
      "collapsed": false,
      "items": [
        {
          "text": "Command reference",
          "link": "/reference/commands"
        },
        {
          "text": "Settings reference",
          "link": "/reference/settings"
        },
        {
          "text": "Placeholder reference",
          "link": "/reference/placeholders"
        },
        {
          "text": "Event fields",
          "link": "/reference/events"
        },
        {
          "text": "Game rule reference",
          "link": "/reference/game-rules"
        },
        {
          "text": "Items and recipes",
          "link": "/reference/items"
        },
        {
          "text": "Permission commands",
          "link": "/reference/permission-commands"
        }
      ]
    }
  ],
  "/tutorials/": [
    {
      "text": "Tutorials",
      "collapsed": false,
      "items": [
        {
          "text": "Announce AFK changes",
          "link": "/tutorials/afk-announcements"
        },
        {
          "text": "Award a Builder group",
          "link": "/tutorials/builder-award"
        },
        {
          "text": "Create a VIP destination",
          "link": "/tutorials/vip-area"
        },
        {
          "text": "Build a shared team base",
          "link": "/tutorials/team-base"
        },
        {
          "text": "Build an information NPC",
          "link": "/tutorials/information-npc"
        },
        {
          "text": "Build a kill leaderboard",
          "link": "/tutorials/kill-leaderboard"
        },
        {
          "text": "Create a random supply crate",
          "link": "/tutorials/loot-crate"
        }
      ]
    }
  ],
  "/api/": [
    {
      "text": "Connection",
      "collapsed": false,
      "items": [
        {
          "text": "Quick start",
          "link": "/api/getting-started"
        },
        {
          "text": "Shared request helper",
          "link": "/api/request-helper"
        },
        {
          "text": "Register namespace",
          "link": "/api/register"
        },
        {
          "text": "Unregister namespace",
          "link": "/api/unregister"
        }
      ]
    },
    {
      "text": "Permissions",
      "link": "/api/permissions",
      "collapsed": true,
      "items": [
        {
          "text": "Check one permission",
          "link": "/api/permissions/has-permission"
        },
        {
          "text": "Explain a permission decision",
          "link": "/api/permissions/get-permission"
        },
        {
          "text": "Check a data permission",
          "link": "/api/permissions/has-data-permission"
        },
        {
          "text": "Read a permission value",
          "link": "/api/permissions/get-data-permission"
        },
        {
          "text": "Check an offline player",
          "link": "/api/permissions/has-permission-from-i-d"
        },
        {
          "text": "Explain an offline decision",
          "link": "/api/permissions/get-permission-from-i-d"
        },
        {
          "text": "List a player’s groups",
          "link": "/api/permissions/get-player-groups"
        },
        {
          "text": "Read the highest group",
          "link": "/api/permissions/get-group"
        },
        {
          "text": "Check several permissions",
          "link": "/api/permissions/batch"
        },
        {
          "text": "Describe addon permissions",
          "link": "/api/permissions/register-permissions"
        }
      ]
    },
    {
      "text": "Claims",
      "link": "/api/claims",
      "collapsed": true,
      "items": [
        {
          "text": "Check whether land is claimed",
          "link": "/api/claims/is-in-claim"
        },
        {
          "text": "Find a claim",
          "link": "/api/claims/get-claim-at-location"
        },
        {
          "text": "Read effective claim options",
          "link": "/api/claims/get-claim-options"
        },
        {
          "text": "Check a claim action",
          "link": "/api/claims/has-claim-rule"
        },
        {
          "text": "Explain a claim decision",
          "link": "/api/claims/get-claim-rule"
        },
        {
          "text": "Save claim metadata",
          "link": "/api/claims/set-metadata"
        },
        {
          "text": "Read claim metadata",
          "link": "/api/claims/get-metadata"
        },
        {
          "text": "Remove claim metadata",
          "link": "/api/claims/remove-metadata"
        }
      ]
    },
    {
      "text": "Holograms",
      "link": "/api/holograms",
      "collapsed": true,
      "items": [
        {
          "text": "Create a hologram",
          "link": "/api/holograms/create"
        },
        {
          "text": "Read a hologram",
          "link": "/api/holograms/get"
        },
        {
          "text": "List your holograms",
          "link": "/api/holograms/list"
        },
        {
          "text": "Update a hologram",
          "link": "/api/holograms/update"
        },
        {
          "text": "Remove a hologram",
          "link": "/api/holograms/remove"
        }
      ]
    },
    {
      "text": "Player data",
      "link": "/api/player_data",
      "collapsed": true,
      "items": [
        {
          "text": "Read player statistics",
          "link": "/api/player_data/get-stats"
        },
        {
          "text": "Read Claim Allowance",
          "link": "/api/player_data/get-claim-allowance"
        }
      ]
    },
    {
      "text": "Teams",
      "link": "/api/teams",
      "collapsed": true,
      "items": [
        {
          "text": "List teams",
          "link": "/api/teams/list"
        },
        {
          "text": "Read a team",
          "link": "/api/teams/get"
        },
        {
          "text": "Find a player’s team",
          "link": "/api/teams/get-player-team"
        },
        {
          "text": "Read a team role",
          "link": "/api/teams/get-role"
        },
        {
          "text": "Compare two players",
          "link": "/api/teams/are-teammates"
        }
      ]
    },
    {
      "text": "Waypoints",
      "link": "/api/waypoints",
      "collapsed": true,
      "items": [
        {
          "text": "Create or replace a waypoint",
          "link": "/api/waypoints/register"
        },
        {
          "text": "List your waypoints",
          "link": "/api/waypoints/list"
        },
        {
          "text": "Remove a waypoint",
          "link": "/api/waypoints/remove"
        }
      ]
    },
    {
      "text": "Events",
      "link": "/api/events",
      "collapsed": true,
      "items": [
        {
          "text": "Register a custom event",
          "link": "/api/events/register"
        },
        {
          "text": "Emit your custom event",
          "link": "/api/events/emit"
        },
        {
          "text": "List event definitions",
          "link": "/api/events/list"
        },
        {
          "text": "Remove your event definition",
          "link": "/api/events/unregister"
        },
        {
          "text": "List notification names",
          "link": "/api/events/list-subscriptions"
        },
        {
          "text": "Subscribe to RMT notifications",
          "link": "/api/events/subscribe"
        },
        {
          "text": "Stop a subscription",
          "link": "/api/events/unsubscribe"
        }
      ]
    },
    {
      "text": "Metadata",
      "link": "/api/metadata",
      "collapsed": true,
      "items": [
        {
          "text": "Save a metadata value",
          "link": "/api/metadata/set"
        },
        {
          "text": "Read a metadata value",
          "link": "/api/metadata/get"
        },
        {
          "text": "List metadata keys",
          "link": "/api/metadata/list"
        },
        {
          "text": "Remove a metadata value",
          "link": "/api/metadata/remove"
        }
      ]
    },
    {
      "text": "Stats",
      "link": "/api/stats",
      "collapsed": true,
      "items": [
        {
          "text": "Register a stat",
          "link": "/api/stats/register"
        },
        {
          "text": "Set a player’s stat",
          "link": "/api/stats/set"
        },
        {
          "text": "Increment a player’s stat",
          "link": "/api/stats/increment"
        },
        {
          "text": "Read a runtime stat value",
          "link": "/api/stats/get"
        },
        {
          "text": "Clear one player’s value",
          "link": "/api/stats/remove-value"
        },
        {
          "text": "List your stat definitions",
          "link": "/api/stats/list"
        },
        {
          "text": "Remove a stat definition",
          "link": "/api/stats/unregister"
        }
      ]
    },
    {
      "text": "Stored Commands",
      "link": "/api/stored_commands",
      "collapsed": true,
      "items": [
        {
          "text": "List saved sequences",
          "link": "/api/stored_commands/list"
        },
        {
          "text": "Check a sequence ID",
          "link": "/api/stored_commands/exists"
        },
        {
          "text": "Run a saved sequence",
          "link": "/api/stored_commands/run"
        }
      ]
    },
    {
      "text": "World Borders",
      "link": "/api/world_borders",
      "collapsed": true,
      "items": [
        {
          "text": "List configured borders",
          "link": "/api/world_borders/list"
        },
        {
          "text": "Read one border",
          "link": "/api/world_borders/get"
        },
        {
          "text": "Check border geometry",
          "link": "/api/world_borders/contains"
        },
        {
          "text": "Check a player’s bypass",
          "link": "/api/world_borders/bypasses"
        },
        {
          "text": "Check border action access",
          "link": "/api/world_borders/allows-action"
        }
      ]
    },
    {
      "text": "Menus",
      "link": "/api/menus",
      "collapsed": true,
      "items": [
        {
          "text": "Register a menu button",
          "link": "/api/menus/register"
        },
        {
          "text": "List your menu entries",
          "link": "/api/menus/list"
        },
        {
          "text": "Remove a menu button",
          "link": "/api/menus/unregister"
        }
      ]
    },
    {
      "text": "Placeholders",
      "link": "/api/placeholders",
      "collapsed": true,
      "items": [
        {
          "text": "Find placeholders",
          "link": "/api/placeholders/list"
        },
        {
          "text": "Resolve one placeholder",
          "link": "/api/placeholders/resolve"
        },
        {
          "text": "Resolve text",
          "link": "/api/placeholders/resolve-text"
        },
        {
          "text": "Resolve one value as raw text",
          "link": "/api/placeholders/resolve-raw-text"
        },
        {
          "text": "Resolve a raw-text template",
          "link": "/api/placeholders/resolve-text-raw-text"
        },
        {
          "text": "Register a placeholder",
          "link": "/api/placeholders/register"
        },
        {
          "text": "Publish placeholder values",
          "link": "/api/placeholders/set-values"
        },
        {
          "text": "Remove a placeholder",
          "link": "/api/placeholders/unregister"
        }
      ]
    }
  ],
  "/reference/": [
    {
      "text": "Reference",
      "collapsed": false,
      "items": [
        {
          "text": "Command reference",
          "link": "/reference/commands"
        },
        {
          "text": "Settings reference",
          "link": "/reference/settings"
        },
        {
          "text": "Placeholder reference",
          "link": "/reference/placeholders"
        },
        {
          "text": "Event fields",
          "link": "/reference/events"
        },
        {
          "text": "Game rule reference",
          "link": "/reference/game-rules"
        },
        {
          "text": "Items and recipes",
          "link": "/reference/items"
        },
        {
          "text": "Permission commands",
          "link": "/reference/permission-commands"
        }
      ]
    },
    {
      "text": "Permission catalogue",
      "collapsed": false,
      "items": [
        {
          "text": "Player feature permissions",
          "link": "/reference/permissions/player"
        },
        {
          "text": "Claim permissions",
          "link": "/reference/permissions/claims"
        },
        {
          "text": "Moderation permissions",
          "link": "/reference/permissions/moderation"
        },
        {
          "text": "Administration permissions",
          "link": "/reference/permissions/admin"
        },
        {
          "text": "Technical permissions",
          "link": "/reference/permissions/technical"
        },
        {
          "text": "Command permissions",
          "link": "/reference/permissions/commands"
        },
        {
          "text": "Personal-setting permissions",
          "link": "/reference/permissions/profile"
        },
        {
          "text": "Initial group grants",
          "link": "/reference/permissions/defaults"
        }
      ]
    },
    {
      "text": "Permission setup guides",
      "collapsed": false,
      "items": [
        {
          "text": "Groups and membership",
          "link": "/admin/permissions"
        },
        {
          "text": "Assign permission nodes",
          "link": "/admin/permission-nodes"
        },
        {
          "text": "Contexts and temporary access",
          "link": "/admin/permission-contexts"
        },
        {
          "text": "Priority and troubleshooting",
          "link": "/admin/permission-priority"
        },
        {
          "text": "Permission commands",
          "link": "/reference/permission-commands"
        }
      ]
    }
  ],
  "/settings/": [
    {
      "text": "Settings · in-game categories",
      "collapsed": false,
      "items": [
        {
          "text": "General",
          "link": "/settings/general"
        },
        {
          "text": "Claiming",
          "link": "/settings/claiming"
        },
        {
          "text": "Mail",
          "link": "/settings/mail"
        },
        {
          "text": "Teleport",
          "link": "/settings/teleport"
        },
        {
          "text": "AFK",
          "link": "/settings/afk"
        },
        {
          "text": "Moderation",
          "link": "/settings/moderation"
        },
        {
          "text": "Lockable Blocks",
          "link": "/settings/lockable-blocks"
        },
        {
          "text": "Action Log Settings",
          "link": "/settings/action-log"
        },
        {
          "text": "World Borders",
          "link": "/settings/world-borders"
        }
      ]
    },
    {
      "text": "Inside Claiming",
      "collapsed": false,
      "items": [
        {
          "text": "Claim Protection Heights",
          "link": "/settings/claim-protection-heights"
        }
      ]
    }
  ]
},
    docFooter: { prev: 'Previous guide', next: 'Next guide' },
    socialLinks: [ { icon: 'discord', link: 'https://discord.gg/tomhmagic' }, { icon: 'github', link: 'https://github.com/Tomhmagic-Creations/rmt-wiki' } ],
    footer: {
      message: 'Realm Management Tool by Tomhmagic Creations. Not affiliated with Mojang or Microsoft.',
      copyright: 'Copyright © Tomhmagic Creations Ltd'
    }
  }
})
