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
    }]
]

var sideOverview = {
    title: '概述', // 必要的
    path: '/', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/ch01',
        '/ch02',
    ]
}

var sideClassA = {
    title: 'CLASS A', // 必要的
    path: '/CLASS-A', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/ch03',
        '/ch04',
        '/ch05',
        '/ch06',
        '/ch07'
    ]
}

var sideClassB = {
    title: 'CLASS B', // 必要的
    path: '/CLASS-B', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/ch08',
        '/ch09',
        '/ch10',
        '/ch11',
        '/ch12',
        '/ch13',
        '/ch14',
        '/ch15',
        '/ch16'
    ]
}

var sideClassC = {
    title: 'CLASS C', // 必要的
    path: '/CLASS-C', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/ch17',
        '/ch18'
    ]
}

var sideAppendix = {
    title: '附录',
    path: '/appendix',
    collapsable: true,
    sidebarDepth: 1,
    children: [
        '/appendix/references',
        '/appendix/build-lora-server'
    ]
}

var sideSupport = {
    title: 'SUPPORT INFORMATION', // 必要的
    path: '/SUPPORT', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/ch21',
        '/ch22',
        '/ch23',
        '/ch24',
        '/ch25'
    ]
}

var themeConfig = {
    sidebarDepth: 3,
    sidebar: [
        sideOverview,
        sideClassA,
        sideClassB,
        sideClassC,
        sideSupport,
        sideAppendix
    ]
}

module.exports = {
    title: 'LoRaWAN Spec 1.1 中文版', // 新增资料后改为“Lora中文资料汇编”
    description: 'LoRa 中文资料汇编。包含 LoRaWAN 1.1 Spec 中文版（翻译）等。持续更新。',
    markdown,
    plugins,
    themeConfig
}