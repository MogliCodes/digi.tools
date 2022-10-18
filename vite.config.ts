import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default defineConfig({
    test: {
        // environment: 'jsdom',
        globals: true,
        include: ['**/*.test.ts'],
        reporters: ['default'],
        coverage: {
            provider: 'c8',
            reporter: ['text-summary', 'lcov', 'clover', 'cobertura'],
            all: true,
            exclude: [
                '.nuxt',
                '.output',
                '**/*.config.ts',
                '**/*.cy.js',
                '**/*.test.ts',
            ],
        },
    },
    resolve: {
        // avoid issues with multiple Vue instances for local development
        // see: https://github.com/vuejs/core/issues/4344
        dedupe: ['vue'],
        alias: {
            '~': resolve(__dirname, './'),
            '~~': resolve(__dirname, './'),
        },
    },
    plugins: [
        AutoImport({
            imports: ['vue'],
        }),
    ],
})
