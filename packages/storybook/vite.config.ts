import react from '@vitejs/plugin-react';
import mdPlugin from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [react(), mdPlugin()],
});
