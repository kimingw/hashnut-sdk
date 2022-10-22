import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

export default defineConfig({
    define: {
        'process.env': {
            NODE_ENV: "production"
        }
    },
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
    build: {
        outDir: "lib",
        lib: {
            entry: 'src/main.tsx',
            name: 'sdk',
            fileName: (format) => `sdk-lib.${format}.js`
        },
    },
    server: {
        host: true
    },
})
