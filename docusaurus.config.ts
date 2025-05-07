import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Behind Bars: The Definitive Guide to Music Notation',
  tagline: 'Notebook for Behind Bars: The Definitive Guide to Music Notation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://behind-bars-notebook.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yoyicue', // Usually your GitHub org/user name.
  projectName: 'behind-bars-notebook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/biu/behind-bars-notebook/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Behind Bars',
      logo: {
        alt: 'Behind Bars Logo',
        src: 'img/behind_bars.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Ground Rules',
              to: '/docs/part-i-general-conventions/ground-rules',
            },
            {
              label: 'Keyboard',
              to: '/docs/part-ii-idiomatic-notation/keyboard',
            },
          ],
        },
        {
          title: 'Purchase Links',
          items: [
            {
              label: 'Amazon',
              href: 'https://www.amazon.com/Behind-Bars-Definitive-Guide-Notation-ebook/dp/B01KLWGUF0/',
            },
            {
              label: 'Google Play',
              href: 'https://play.google.com/store/books/details/Elaine_Gould_Behind_Bars?id=yBK_DwAAQBAJ',
            },
            {
              label: 'Apple Books',
              href: 'https://books.apple.com/us/book/behind-bars/id6459233804',
            },
            {
              label: 'Tmall',
              href: 'https://detail.tmall.com/item.htm?id=690199137286',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yoyicue/behind-bars-notebook',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()}, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
