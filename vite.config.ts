import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
