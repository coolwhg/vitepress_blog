// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import DefaultTheme from 'vitepress/theme'

/** 自定义布局 */
import Layout from './components/Layout.vue'

/** 更新时间 */
import ArticleMetadata from './components/ArticleMetadata.vue'

/** 图片缩放 */
import mediumZoom from 'medium-zoom'
import {onMounted, watch, nextTick} from 'vue'
import {useRoute} from 'vitepress'

/** 视频播放 */
import Player from './components/Player.vue'

/** 进度条组件 */
import {inBrowser} from 'vitepress'
import {NProgress} from 'nprogress-v2/dist/index.js'
import 'nprogress-v2/dist/index.css'

// 代码组样式
import 'virtual:group-icons.css'

// 引入时间线样式
import 'vitepress-markdown-timeline/dist/theme/index.css'

/** 自定义样式 */
import './style.css'
import './style/index.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    setup() {
        const route = useRoute()
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        }
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    },
    Layout: () => {
        return h(Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        // 注册全局组件
        app.component('Player', Player)
        app.component('ArticleMetadata', ArticleMetadata)

        if (inBrowser) {
            NProgress.configure({showSpinner: false})
            router.onBeforeRouteChange = () => {
                NProgress.start() // 开始进度条
            }
            router.onAfterRouteChange = () => {
                NProgress.done() // 停止进度条
            }
        }
    },
}
