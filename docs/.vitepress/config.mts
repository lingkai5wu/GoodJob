import {defineConfig} from 'vitepress'
import AutoSidebarPlugin from 'vitepress-auto-sidebar-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "GoodJob",
    description: "文档写作的效能手册",
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Word', link: '/word/image-compression'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/lingkai5wu/GoodJob'}
        ],
        editLink: {
            pattern: 'https://github.com/lingkai5wu/GoodJob/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
            text: '最后更新于'
        }
    },
    vite: {
        plugins: [
            AutoSidebarPlugin({
                srcDir: './docs'
            }),
        ],
    },
})
