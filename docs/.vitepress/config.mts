import {defineConfig} from 'vitepress'
import AutoSidebarPlugin from 'vitepress-auto-sidebar-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "GoodJob",
    description: "文档写作的效能手册",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        socialLinks: [
            {icon: 'github', link: 'https://github.com/lingkai5wu/GoodJob'}
        ]
    },
    vite: {
        plugins: [
            AutoSidebarPlugin({
                srcDir: './docs'
            }),
        ],
    },
})
