import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import myPlugin from './plugins/dataSvg';

export default defineConfig({
  plugins: [vue(), myPlugin(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/media': 'http://localhost:8000',
    },
  },
});
