import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Realm Management Tool Wiki",
  description: "A wiki for the Realm Management Tool Add-On created by Tomhmagic Creations",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    externalLinkIcon: true,
    logo: '/assets/images/realm_tool.png',
    footer: {
      copyright: '"Minecraft" is a trademark of Mojang AB. "Realm Management Tool" is a trademark of Tomhmagic Creations Ltd. Realm Management Tool is not affiliated in anyway with Mojang AB. All product and company names are trademarks(™) or registered (®) trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them. All specifications are subject to change without notice. Tomhmagic Creations Ltd is a company registered in England and Wales, Company Number: 12984160',
      message: 'Copyright © 2020-present Tomhmagic Creations Ltd'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installing', link: '/pages/main/index' },
          { text: 'Roadmap', link: '/pages/main/roadmap' },
          { text: 'Blocks & Items', link: '/pages/main/blocksItems' }
        ]
      },
      {
        text: 'Claims System',
        items: [
              { text: 'Claims & Subclaims', link: '/pages/claims/index' },
              { text: 'Create a Claim', link: '/pages/claims/create' },
              { text: 'Permissions', link: '/pages/claims/permissions' },
              { text: 'Claim Options', link: '/pages/claims/options' },
              { text: 'Trusted Players', link: '/pages/claims/trust' },
              { text: 'Other Claim Info', link: '/pages/claims/other' }
        ]
      },
      {
        text: 'RMT Menu',
        items: [
              { text: 'Main Menu', link: '/pages/menu/index' },
              { text: 'Commands', link: '/pages/menu/commands' },
              { text: 'Homes', link: '/pages/menu/homes' },
              { text: 'Warps', link: '/pages/menu/warps' },
              { text: 'Player Warps', link: '/pages/menu/playerWarps' }
        ]
      },
      {
        text: 'Moderation',
        items: [
              { text: 'General', link: '/pages/mod/index' },
              { text: 'InvSee', link: '/pages/mod/invsee' },
              { text: 'Whitelist', link: '/pages/mod/whitelist' },
              { text: 'Mod Actions', link: '/pages/mod/modActions' }
        ]
      },
      {
        text: 'Admin',
        items: [
              { text: 'Manage Players', link: '/pages/admin/index' },
              { text: 'Manage Spawn', link: '/pages/admin/manageSpawn' },
              { text: 'Manage Warps', link: '/pages/admin/manageWarps' },
              { text: 'Manage Ranks', link: '/pages/admin/manageRanks' },
              { text: 'Edit Announcements', link: '/pages/admin/announcements' },
              { text: 'Admin Claims', link: '/pages/admin/claims' },
              { text: 'Edit Main Menu', link: '/pages/admin/mainMenu' },
              { text: 'Settings', link: '/pages/admin/settings' },
              
        ]
      }
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Getting Started', link: '/pages/main/index' },
          { text: 'Roadmap', link: '/pages/main/roadmap' },
          { text: 'Blocks & Items', link: '/pages/main/blocksItems' }
        ]
      },
      {
        text: 'Claim System',
        items: [
              { text: 'Claims & Subclaims', link: '/pages/claims/index' },
              { text: 'Create a Claim', link: '/pages/claims/create' },
              { text: 'Permissions', link: '/pages/claims/permissions' },
              { text: 'Claim Options', link: '/pages/claims/options' },
              { text: 'Trusted Players', link: '/pages/claims/trust' },
              { text: 'Other Claim Info', link: '/pages/claims/other' }
        ]
      },
      {
        text: 'RMT Menu',
        items: [
              { text: 'Main Menu', link: '/pages/menu/index' },
              { text: 'Commands', link: '/pages/menu/commands' },
              { text: 'Homes', link: '/pages/menu/homes' },
              { text: 'Warps', link: '/pages/menu/warps' },
              { text: 'Player Warps', link: '/pages/menu/playerWarps' }
        ]
      },
      {
        text: 'Moderation',
        items: [
              { text: 'General', link: '/pages/mod/index' },
              { text: 'InvSee', link: '/pages/mod/invsee' },
              { text: 'Whitelist', link: '/pages/mod/whitelist' },
              { text: 'Mod Actions', link: '/pages/mod/modActions' }
        ]
      },
      {
        text: 'Admin',
        items: [
          { text: 'Manage Players', link: '/pages/admin/index' },
          { text: 'Manage Spawn', link: '/pages/admin/manageSpawn' },
          { text: 'Manage Warps', link: '/pages/admin/manageWarps' },
          { text: 'Manage Ranks', link: '/pages/admin/manageRanks' },
          { text: 'Edit Announcements', link: '/pages/admin/announcements' },
          { text: 'Admin Claims', link: '/pages/admin/claims' },
          { text: 'Edit Main Menu', link: '/pages/admin/mainMenu' },
          { text: 'Settings', link: '/pages/admin/settings' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/tomhmagic' },
      { icon: 'github', link: 'https://github.com/Tomhmagic-Creations/rmt-wiki' },
    ]
  }
})
