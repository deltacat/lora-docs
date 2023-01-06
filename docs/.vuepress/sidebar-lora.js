const sideOverview = {
    text: 'LoRaWAN 1.1 规范', // 必要的
    link: '/lorawan-v1.1/', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch01',
        '/lorawan-v1.1/ch02',
    ]
}

const sideClassA = {
    text: 'CLASS A', // 必要的
    link: '/lorawan-v1.1/CLASS-A', // 可选的, 应该是一个绝对路径
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

const sideClassB = {
    text: 'CLASS B', // 必要的
    link: '/lorawan-v1.1/CLASS-B', // 可选的, 应该是一个绝对路径
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

const sideClassC = {
    text: 'CLASS C', // 必要的
    link: '/lorawan-v1.1/CLASS-C', // 可选的, 应该是一个绝对路径
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2, // 可选的, 默认值是 1
    children: [
        '/lorawan-v1.1/ch17',
        '/lorawan-v1.1/ch18'
    ]
}

const sideSupport = {
    text: 'SUPPORT INFORMATION', // 必要的
    link: '/lorawan-v1.1/SUPPORT', // 可选的, 应该是一个绝对路径
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

const sideAppendix = {
    text: '附录',
    link: '/lorawan-v1.1/appendix',
    collapsable: true,
    sidebarDepth: 1,
    children: [
        '/lorawan-v1.1/appendix/references',
        '/lorawan-v1.1/appendix/build-lora-server'
    ]
}

export default [
    sideOverview,
    sideClassA,
    sideClassB,
    sideClassC,
    sideSupport,
    sideAppendix
]