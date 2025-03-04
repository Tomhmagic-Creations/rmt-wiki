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
          { text: 'Installing', link: '/main/index' },
          { text: 'Terminology', link: '/main/termanology' }
        ]
      },
      {
        text: 'Claims System',
        items: [
              { text: 'Claims & Subclaims', link: '/claims/index' },
              { text: 'Create a Claim', link: '/claims/create' },
              { text: 'Permissions', link: '/claims/permissions' },
              { text: 'Claim Options', link: '/claims/options' },
              { text: 'Trusted Players', link: '/claims/trust' },
              { text: 'Other Claim Info', link: '/claims/other' }
        ]
      },
      {
        text: 'RMT Menu',
        items: [
              { text: 'Main Menu', link: '/menu/index' },
              { text: 'Commands', link: '/menu/commands' },
              { text: 'Homes', link: '/menu/homes' },
              { text: 'Warps', link: '/menu/warps' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Getting Started', link: '/main/index' },
          { text: 'Terminology', link: '/main/termanology' }
        ]
      },
      {
        text: 'Claim System',
        items: [
              { text: 'Claims & Subclaims', link: '/claims/index' },
              { text: 'Create a Claim', link: '/claims/create' },
              { text: 'Permissions', link: '/claims/permissions' },
              { text: 'Claim Options', link: '/claims/options' },
              { text: 'Trusted Players', link: '/claims/trust' },
              { text: 'Other Claim Info', link: '/claims/other' }
        ]
      },
      {
        text: 'RMT Menu',
        items: [
              { text: 'Main Menu', link: '/menu/index' },
              { text: 'Commands', link: '/menu/commands' },
              { text: 'Homes', link: '/menu/homes' },
              { text: 'Warps', link: '/menu/warps' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/tomhmagic' },
      { icon: 'github', link: 'https://github.com/Tomhmagic-Creations/rmt-wiki' },
    ]
  }
})
