import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2017',
    lib: {
      name: 'anyframe',
      entry: './src/index.ts',
      formats: ['es', 'iife', 'cjs', 'umd'],
      fileName: (format) => `index.${format}${format !== 'cjs' ? '.js' : ''}`
    },
    sourcemap: true,
    rollupOptions: {
      output: { exports: 'named' }
    }
  }
})
