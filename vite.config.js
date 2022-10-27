import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  build: {
    target: 'esnext'
  },
  define: {
    'process.env.NODE_DEBUG': 'false',
    'global': 'globalThis'
  },
  publicDir: 'public'
}
