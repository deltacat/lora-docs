var markdown = {
    lineNumbers: true,
    extendMarkdown: md => {
        md.use(require('markdown-it-footnote'))
        md.use(require('markdown-it-task-lists'))
    }
}

var plugins = [
    ['mathjax', {
        target: 'svg',
        macros: {
            '*': '\\times',
        },
    }],
    'vuepress-plugin-glossary'
]

var loraSidebar = require('./sidebar-lora')
var loraRpSidebar = require('./sidebar-lora-rp')

var themeConfig = {
    sidebarDepth: 3,
    sidebar: {
        '/lorawan-v1.1/': loraSidebar,
        '/lorawan-rp-v1.1/': loraRpSidebar
    },
    nav: [
        { text: 'LoRa Spec', link: '/lorawan-v1.1/' },
        { text: 'Region Params', link: '/lorawan-rp-v1.1/' },
    ],
    lastUpdated: '最近更新',
    repo: 'deltacat/lora-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮我改善此页面'
}

module.exports = {
    title: 'LoRa 中文资料汇编',
    description: 'LoRa 中文资料汇编。包含 LoRaWAN 1.1 Spec 中文版（翻译）等。持续更新。',
    port: 3502,
    markdown,
    plugins,
    themeConfig
}