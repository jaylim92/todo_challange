import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path, {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      {find: "@components", replacement: "/src/components"},
      {find: "@", replacement: "/src"}
    ],
  },
  plugins: [preact()],
})
