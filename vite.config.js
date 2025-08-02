import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      apis: '/src/apis',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      hooks: '/src/hooks',
      pages: '/src/pages',
      utils: '/src/utils',
    },
  },
});
