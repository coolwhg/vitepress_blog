import {defineConfig} from 'vitepress'
/** 侧边栏插件 */
import {generateSidebar} from 'vitepress-sidebar'
/** 图标插件 */
import {groupIconMdPlugin, groupIconVitePlugin} from 'vitepress-plugin-group-icons'
/** 代码组中添加图片 */
import renderImages from './theme/utils/renderImages.js'
/** 图表插件 */
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid'
/** 时间线插件 */
import timeline from 'vitepress-markdown-timeline'
/** 导航栏 */
import nav from './nav.mjs'

const vitepressSidebarOptions = {
    documentRootPath: '/docs',
    collapsed: false, //折叠组关闭
    collapseDepth: 2, //折叠组2级菜单
    removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: '_', //删除前缀的符号
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '全栈笔记',
    description: '软件开发知识分享',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchLabel: '切换主题',
        sidebarMenuLabel: '目录',
        nav: nav,
        sidebar: generateSidebar(vitepressSidebarOptions),
        //返回顶部文字修改
        returnToTopLabel: '返回顶部',
        // 最后更新时间戳
        lastUpdated: true,
        // 页面导航
        outline: {
            level: [2, 4], // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: '页面导航', // 文字显示
        },
        // 文档页脚
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        //上次更新时间
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short', // 可选值full、long、medium、short
                timeStyle: 'medium', // 可选值full、long、medium、short
            },
        },

        //本地搜索
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        },
                    },
                },
            },
        },
    },
    markdown: {
        // 容器标题
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息',
        },
        // 代码块行号
        lineNumbers: true,
        config(md) {
            //图表插件
            md.use(MermaidMarkdown)
            // 时间线插件
            md.use(timeline)
            //代码组图标
            md.use(groupIconMdPlugin)
            //代码组中添加图片
            renderImages(md)

            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options)
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
                return htmlResult
            }
        },
    },
    vite: {
        plugins: [
            //图表插件
            MermaidPlugin(),
            //代码组图标
            groupIconVitePlugin({
                customIcon: {
                    js: 'logos:javascript', //js图标
                    md: 'logos:markdown', //markdown图标
                    css: 'logos:css-3', //css图标
                },
            }),
        ],
        optimizeDeps: {
            include: ['mermaid', 'medium-zoom', 'nprogress-v2', 'xgplayer'],
            exclude: [],
        },
        ssr: {
            noExternal: ['mermaid'],
        },
    },
})
