import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ancient-civilizations.github.io/', // Replace <repository-name> with your GitHub repo name
});
