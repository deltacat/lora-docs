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
    title: 'LoRaWAN 1.1 规范', // 必要的
    path: '/lorawan-v1.1/', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch01',
        '/lorawan-v1.1/ch02',
    ]
}

var sideClassA = {
    title: 'CLASS A', // 必要的
    path: '/lorawan-v1.1/CLASS-A', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch03',
        '/lorawan-v1.1/ch04',
        '/lorawan-v1.1/ch05',
        '/lorawan-v1.1/ch06',
        '/lorawan-v1.1/ch07'
    ]
}

var sideClassB = {
    title: 'CLASS B', // 必要的
    path: '/lorawan-v1.1/CLASS-B', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch08',
        '/lorawan-v1.1/ch09',
        '/lorawan-v1.1/ch10',
        '/lorawan-v1.1/ch11',
        '/lorawan-v1.1/ch12',
        '/lorawan-v1.1/ch13',
        '/lorawan-v1.1/ch14',
        '/lorawan-v1.1/ch15',
        '/lorawan-v1.1/ch16'
    ]
}

var sideClassC = {
    title: 'CLASS C', // 必要的
    path: '/lorawan-v1.1/CLASS-C', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch17',
        '/lorawan-v1.1/ch18'
    ]
}

var sideSupport = {
    title: 'SUPPORT INFORMATION', // 必要的
    path: '/lorawan-v1.1/SUPPORT', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch19',
        '/lorawan-v1.1/ch20',
        '/lorawan-v1.1/ch21',
        '/lorawan-v1.1/ch22',
        '/lorawan-v1.1/ch23',
        '/lorawan-v1.1/ch24',
        '/lorawan-v1.1/ch25'
    ]
}

var sideAppendix = {
    title: '附录',
    path: '/lorawan-v1.1/appendix',
    collapsable: true,
    sidebarDepth: 1,
    children: [
        '/lorawan-v1.1/appendix/references',
        '/lorawan-v1.1/appendix/build-lora-server'
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