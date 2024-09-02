import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
const port: number = Number(process.env.PORT) || 3000;
export default defineConfig({
  plugins: [react()],
  server: {
    port, // Используем переменную окружения PORT
  },
  resolve: {
    alias: {
      '@locales': path.resolve(__dirname, './locales'),
      '@data': path.resolve(__dirname, './src/data'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@slices': path.resolve(__dirname, './src/slices'),
      '@store': path.resolve(__dirname, './src/store'),
      '@routes': path.resolve(__dirname, './src/components/routes'),
    },
  },
});
