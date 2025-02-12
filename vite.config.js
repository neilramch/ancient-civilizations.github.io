import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_OPENAI_API_KEY': '""', // Ensures API key isn't bundled
  },
  base: '/', // Replace <repository-name> with your GitHub repo name
});
