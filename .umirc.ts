export default {
    hash: true,
    define: {
      'process.env.RELEASE': false,
      'process.env.RELEASE_VERSION': '',
      // 多语言开关，控制切换入口和是否发起多语言数据初始化
      'process.env.SWITCHES_I18N': true,
      'process.env.I18N_ENV': 'dev',
    },
    routes: [
        { path: '/', component: 'index' },
        { path: '/user', component: 'user' },
        { path: '/product', component: 'product' },
    ],
    antd:{},
    targets: {
      ie: 11,
      android: '4.3',
    },
    
}