import {defineUserConfig, defaultTheme} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '个人博客-vuepress',
    description: '这是我的第一个 VuePress 站点',
    /*head:[
        ['meta', { name: 'google', content: 'notranslate' }],
        ['meta', { name: 'robots', content: 'noindex' }]
    ],*/
    locales:{
        '/': {
            disableTranslation: true
        },
        '../blogs/alibaba_front_end_specifications': {
            disableTranslation: true
        },
    },
    theme: defaultTheme({
        navbar: [
            {
                text: "前端规范开发",
                link: '../blogs/alibaba_front_end_specifications'
            },
            {
                text: "首页",
                link: '/',
            },
            {
                text: "联系我",
                children: [
                    {
                        text: "掘金",
                        link: 'https://juejin.cn/user/2122481733994381',
                    },
                    {
                        text: "GitHub",
                        link: 'https://github.com/jintaim',
                    }
                ]
            },
        ],
    })
})
;



