import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Home from './src/Components/Home/Home'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:/react-app-project/
})
