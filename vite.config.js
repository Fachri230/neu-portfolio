import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: the React plugin lets Vite understand JSX syntax
export default defineConfig({
  plugins: [react()],
});
