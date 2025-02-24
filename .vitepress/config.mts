import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "macOS Virtualization",
  description: "Open-Source macOS Virtualization Solutions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/macvmio' },
      { icon: 'slack', link: 'https://join.slack.com/t/macvmio/shared_invite/zt-2ucambk2r-Ij470jYyavnobe5hyYClHQ' },
      { icon: 'x', link: 'https://x.com/macvmio' },
      { icon: 'youtube', link: 'https://www.youtube.com/@macvmio' }
    ]
  }
})
