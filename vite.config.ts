import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    //port: 8003,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    //解决跨域问题
    // proxy: {
    //   '/api': { //表示拦截以/api开头的请求路径
    //     //target: 'http://192.168.3.40:8002/',//服务端的Web API
    //     target: 'http://172.17.70.46:8002/',//服务端的Web API
    //     //target: 'http://192.168.0.52:8002/',//服务端的Web API
    //     changeOrigin: true, //是否开启跨域
    //     //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
