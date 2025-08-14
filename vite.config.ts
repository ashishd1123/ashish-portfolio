import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Change /ashish-portfolio/ to match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/ashish-portfolio/',
});
