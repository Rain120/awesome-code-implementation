module.exports = {
  base: '/awesome-javascript-code-implementation/',
  title: "非常棒的 JavaScript 源码实现",
  description: '🤟🎮欢迎来到 JavaScript 源码实现 🎮🤟',
  port: 9527,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  configureWebpack: {
    resolve: {
      // images: {
      //   '@images': '/images'
      // }
    }
  },
  themeConfig: {
    theme: 'vue',
    repo: "https://github.com/Rain120/awesome-javascript-code-implementation",
    repoLabel: 'Repo',

    sidebar: [{
      title: 'Guide',
      path: '/guide/',
      children: [
        '/'
      ]
    }],
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" }
        ]
      },
      { text: "Github", link: "https://github.com/rain120", target: "_blank"},
    ],

    // polyfill IE
    evergreen: true,

    // markdown
    markdown: {
      lineNumbers: true,
      anchor: {
        permalink: true,
      },
      // toc: {
      //   includeLevel: [1, 2],
      // },
      config: md => {
        md.use(require('markdown-it-task-lists'))
          .use(require('markdown-it-imsize'), { autofill: true })
      }
    },

    // gittalk
    comment: {
      clientID: '58efa883d352424befd3',
      clientSecret: 'faf0e2d7ff9355b3692d605d698f7abcbbd43388',
      repo: 'https://github.com/Rain120/awesome-javascript-code-implementation',
      owner: 'rain120',
      admin: ['rain120'],
      perPage: 20,
      distractionFreeMode: false  // Facebook-like distraction free mode
    },
      
    // search
    search: true,
    searchMaxSuggestions: 10,
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },

    // PWA
    serviceWorker: true,

    displayAllHeaders: true,

    smoothScroll: true,

    // footer
    date_format: 'yyyy-MM-dd',
    lastUpdated: "Last Updated",
    repoLabel: "查看源码",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！"
  }
};
