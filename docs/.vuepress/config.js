
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import loraSideBar from './sidebar-lora'
import loraRpSideBar from './sidebar-lora-rp'

const markdown = {
    lineNumbers: true,
}

const plugins = [
    // ['mathjax', {
    //     target: 'svg',
    //     macros: {
    //         '*': '\\times',
    //     },
    // }],
    // 'vuepress-plugin-glossary',
    searchPlugin({}),
    mdEnhancePlugin({ tasklist: true, footnote: true })
]

const theme = defaultTheme({
    sidebarDepth: 3,
    sidebar: {
        '/lorawan-v1.1/': loraSideBar,
        '/lorawan-rp-v1.1/': loraRpSideBar
    },
    navbar: [
        { text: 'LoRa Spec', link: '/lorawan-v1.1/' },
        { text: 'Region Params', link: '/lorawan-rp-v1.1/' },
    ],
    lastUpdated: '最近更新',
    repo: 'deltacat/lora-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮我改善此页面'
})

export default {
    title: 'LoRa 中文资料汇编',
    description: 'LoRa 中文资料汇编。包含 LoRaWAN 1.1 Spec 中文版（翻译）等。持续更新。',
    port: 3502,
    markdown,
    plugins,
    theme
}