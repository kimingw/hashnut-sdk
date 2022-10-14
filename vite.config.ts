import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import { ViteEjsPlugin } from "vite-plugin-ejs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteEjsPlugin((viteConfig) => {
      // @ts-ignore
      const env = loadEnv(viteConfig.mode, process.cwd())
      // viteConfig is the current viteResolved config.
      return {
        name: env.VITE_PROJECTNAME,
        svgIcon: env.VITE_SVG_ICON
      }
    }),
    inject({
      React: 'react',
      ReactDOM: 'react-dom',
      useEffect: ['react', 'useEffect'],
      useState: ['react', 'useState'],
      useCallback: ['react', 'useCallback'],
      useMemo: ['react', 'useMemo'],
      useReducer: ['react', 'useReducer'],
      useRef: ['react', 'useRef'],
      useContext: ['react', 'useContext'],
    })
  ],
  server: {
    host: true
  },
})
