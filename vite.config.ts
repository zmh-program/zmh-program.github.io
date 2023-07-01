import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";
import {createHtmlPlugin} from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: [
        'avatar/*.webp',
        'donate/*.webp',
        'friend/*.webp',
        'project/*.webp',
        'background.webp',
        'gov.webp',
        'https://fonts.googlefonts.cn/css?family=Ubuntu',
      ],
      devOptions: {
        enabled: true,
      }
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
