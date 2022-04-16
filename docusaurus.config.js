// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoa',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/zoa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Suishow', // Usually your GitHub org/user name.
  projectName: 'zoa-docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zoa',
        logo: {
          alt: 'Zoa Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [],
          },
          {
            title: 'Zoa',
            items: [],
          },
          {
            title: 'Marketplace',
            items: [],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
