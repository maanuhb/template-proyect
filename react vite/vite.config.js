import { defineConfig } from "vite";//eslint-disable-line
import react from "@vitejs/plugin-react";//eslint-disable-line

export default defineConfig({
  resolve: {
    alias: {
      /*
      '@': path.resolve(__dirname, './src'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@login': path.resolve(__dirname, './src/Login/'),
      '@register': path.resolve(__dirname, './src/Register/'),
      '@reset': path.resolve(__dirname, './src/ResetPassword/'),
      '@common': path.resolve(__dirname, './src/common/'),
      '@configuration': path.resolve(__dirname, './src/Configuration/'),
      '@testimonials': path.resolve(__dirname, './src/Testimonials/'),
      '@home': path.resolve(__dirname, './src/Home/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@administration': path.resolve(__dirname, './src/UsersAdministration/')
      */
    },
  },
  plugins: [react()],
});
