const path = require('path');
const { slugify } = require('@vuepress/shared-utils')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText, tabs } = require('./utils')
const copyOptions = require('./config/copy');

const config = {
  theme: 'vuepress-theme-uni-app-test',
  title: 'uni-app官网',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }],
    ['script', { src: `/js/redirect.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }],
    ['script', { src: 'https://hm.baidu.com/hm.js?fe3b7a223fc08c795f0f4b6350703e6f' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    titleLogo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ae87107-2943-4ba6-be2b-390ca27c6260.png',
    logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5a7f902b-21a7-4822-884f-925219eacc4b.png',
    // TODO use plugin/theme
    sidebar: createSidebar(tabs),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://gitcode.net/dcloud/unidocs-zh',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    // smoothScroll: true,
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ',
      searchParameters: { hitsPerPage: 50 }
    },
    isDevelopment: process.env.NODE_ENV === 'development'
  },
  markdown: {
    // toc: { includeLevel: [1, 2, 3, 4] },
    slugify(str) {
      if (typeof str !== 'string') return ''

      let slug = str
      if (slug.includes('@')) {
        let array = slug.split('@')
        slug = array.length > 1 ? array[array.length - 1] : str
      } else {
        slug = simplifySlugText(slug.toLowerCase()).trim()
      }
      return slugify(slug)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown(config) {
      config
        .plugin('translate')
        .use(translatePlugin)
        .end()
        .plugin('convert-header')
        .use(headerPlugin)
        .end()
        .plugin('normallize-link')
        .use(require('./markdown/normallizeLink'))
    }
  },
  chainWebpack(config, isServer) {
    config.resolve.alias.set(
      '@theme-config',
      path.resolve(process.cwd(), 'docs/.vuepress/config')
    )
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ]
}

module.exports = config