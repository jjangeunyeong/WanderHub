import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoJavaScriptKey: env.VITE_KAKAO_JAVASCRIPT_KEY,
          },
        },
      }),
    ],
    server: {
      port: 3000,
      proxy: {
        '/v1': {
          target: 'http://ec2-3-34-80-242.ap-northeast-2.compute.amazonaws.com:8080',
          // changeOrigin: true,
          // secure: false,
          // ws: true,
          // rewrite: path => path,
          //rewrite: path => path.replace(/^\/v1/, ''),
        },
      },
    },
    resolve: {
      alias: [
        { find: '@assets', replacement: '/src/assets' },
        { find: '@components', replacement: '/src/components' },
        { find: '@pages', replacement: '/src/Pages' },
        { find: '@', replacement: '/src' },
      ],
    },
  };
});
