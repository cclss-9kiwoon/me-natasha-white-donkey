import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: '/me-natasha-white-donkey/',
    server: {
        port: 5173,
    },
});
