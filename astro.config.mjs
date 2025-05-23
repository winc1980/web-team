import { defineConfig } from 'astro/config';
import { CUSTOM_DOMAIN, BASE_PATH } from './src/server-constants';
import CoverImageDownloader from './src/integrations/cover-image-downloader';
import CustomIconDownloader from './src/integrations/custom-icon-downloader';
import FeaturedImageDownloader from './src/integrations/featured-image-downloader';
import AuthorImageDownloader from './src/integrations/author-image-downloader';
import PublicNotionCopier from './src/integrations/public-notion-copier';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
const getSite = function () {
  if (CUSTOM_DOMAIN) {
    return new URL(BASE_PATH, `https://${CUSTOM_DOMAIN}`).toString();
  }
  if (process.env.VERCEL && process.env.VERCEL_URL) {
    return new URL(BASE_PATH, `https://${process.env.VERCEL_URL}`).toString();
  }
  if (process.env.CF_PAGES) {
    if (process.env.CF_PAGES_BRANCH !== 'main') {
      return new URL(BASE_PATH, process.env.CF_PAGES_URL).toString();
    }
    return new URL(
      BASE_PATH,
      `https://${new URL(process.env.CF_PAGES_URL).host.split('.').slice(1).join('.')}`
    ).toString();
  }
  return new URL(BASE_PATH, 'http://localhost:4321').toString();
};

// https://astro.build/config
export default defineConfig({
  site: 'https://web-team.winc.ne.jp',
  base: BASE_PATH,
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  integrations: [
    CoverImageDownloader(),
    CustomIconDownloader(),
    FeaturedImageDownloader(),
    AuthorImageDownloader(),
    PublicNotionCopier(),
    tailwind(),
    sitemap(),
  ],
  // Astroを実行したときにブラウザが自動でサーバーを開く
  server: {
    host: true,
    open: true,
  },
});
