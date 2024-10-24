import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // load svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    host: '0.0.0.0'
    // proxy: {
    //   '/api': {
    //     target: 'https://apifoxmock.com/m1/5338620-5009482-default',
    //     changeOrigin: true,
    //     // rewrite: path => path.replace(/^\/api/, ''),
    //     // secure: false
    //     configure: (proxy, options) => {
    //       // 配置此项可在响应头中看到请求的真实地址
    //       proxy.on('proxyRes', (proxyRes, req) => {
    //         proxyRes.headers['x-real-url'] = new URL(req.url || '', options.target)?.href || ''
    //       })
    //     }
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
