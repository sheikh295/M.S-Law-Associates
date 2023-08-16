import path from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        practiceareas: path.resolve(__dirname, 'practiceareas.html'),
        privacypolicy: path.resolve(__dirname, 'privacypolicy.html'),
      },
    },
  },
})