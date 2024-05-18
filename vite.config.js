import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
      laravel({
        input: [
          'resources/js/Controllers/HomeController.jsx',
          'resources/js/Controllers/PortofolioController.jsx',
          'resources/js/Controllers/ContactController.jsx',
          'resources/js/Controllers/404Controller.jsx',
        ],
        refresh: true,
      }),
      react(),
    ],
    build: {
      outDir: 'public/build',
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: {
          home: 'resources/js/Controllers/HomeController.jsx',
          portofolio: 'resources/js/Controllers/PortofolioController.jsx',
          contact: 'resources/js/Controllers/ContactController.jsx',
          notFound: 'resources/js/Controllers/404Controller.jsx',
        },
      },
    },
  });
