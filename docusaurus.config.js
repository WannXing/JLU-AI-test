module.exports = {
  // 添加百度统计 https://github.com/facebook/docusaurus/pull/3771
  // scripts: [[ `
  // var _hmt = _hmt || [];
  // (function() {
  //   var hm = document.createElement("script");
  //   hm.src = "https://hm.baidu.com/hm.js?158a1727bfaa490141e18dbfba084cf9";
  //   var s = document.getElementsByTagName("script")[0]; 
  //   s.parentNode.insertBefore(hm, s);
  // })();
  //   `
  // ]],

  title: 'JLU-AI-Lab',
  tagline: '不要停止奔跑,值得期待的只有远方',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  // favicon: 'img/favicon.ico',
  favicon: 'img/logo-go.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JLU-AI-Lab',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
        src: 'img/logo-white.jpg',
      },
      links: [
        {
          to: 'docs/task1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/WannXing/JLU-AI-test',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WannXing/JLU-AI-test',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WanXing. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
