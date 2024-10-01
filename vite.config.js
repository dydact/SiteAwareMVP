import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-ts';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
