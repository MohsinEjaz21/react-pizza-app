import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
const path = require('path');

export default defineConfig(({ mode }) => {
  return {
    preview: {
      port: 8000,
    },
    plugins: [
      react(),
      Pages(),
      svgr(),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          clientsClaim: true,
          skipWaiting: true,
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            {
              urlPattern: /\/_ui\//,
              handler: 'NetworkFirst',
            },
          ],
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      }),
      chunkSplitPlugin(),
    ],
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@src': path.resolve(__dirname, './src'),
      },
    },
    css: {
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCase',
      },
      preprocessorOptions: {
        scss: {
          includePaths: ['node_modules'],
        },
      },
    },
    server: {
      https: false,
      port: 8080,
      strictPort: true,
      hmr: {
        clientPort: 8080,
        protocol: 'ws',
      }
    },

    base: './',
    publicDir: './public',
    tsconfig: './tsconfig.json'
  }
});
