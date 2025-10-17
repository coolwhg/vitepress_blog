import {defineConfig} from 'vitepress'
/** 侧边栏插件 */
import {withSidebar} from 'vitepress-sidebar'
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

/** 侧边栏配置 */
const vitePressSidebarOptions = [
    {
        // 文档文件所在的顶级路径
        documentRootPath: '/docs',
        // 扫描文档列表的根目录路径
        scanStartPath: 'Node-Red',
        // 如果路径因VitePress的重写选项而改变,则可以使用此选项
        basePath: '/docs/Node-Red/',
        // 使用h1的标题作为侧边栏的标题
        useTitleFromFileHeading: true,
        // 使用文件夹的index.md
        useFolderTitleFromIndexFile: true,
        // 指向文件夹的链接
        useFolderLinkFromIndexFile: true,
        // 根据md文件的order进行排序
        sortMenusByFrontmatterOrder: true,
        // 排序之后将不是文件夹的放后面
        sortFolderTo: 'top',
        // 菜单展开功能
        collapsed: false,
    },
]

const vitePressOptions = {
    lang: 'zh-CN',
    title: '全栈笔记',
    description: '软件开发知识分享',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchTitle: '深色主题',
        lightModeSwitchTitle: '浅色主题',
        sidebarMenuLabel: '目录',
        logo: '/logo.svg',
        nav: nav,
        //返回顶部文字修改
        returnToTopLabel: '返回顶部',
        // 页面导航
        outline: {
            level: [2, 4], // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: '页面导航', // 文字显示
        },
        // 文档页脚
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
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
                        searchBox: {
                            resetButtonTitle: '清除查询条件',
                            resetButtonAriaLabel: '清除查询条件',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消',
                        },
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                            searchByText: '搜索提供者',
                        },
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                    },
                },
            },
        },
        //404页面的配置
        notFound: {
            title: '页面未找到',
            quote: '哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！',
            linkText: '返回首页',
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
}
// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
