import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [...configDefaults.exclude, '__tests__/**/*.ts'],
    // https://github.com/marketplace/actions/vitest-coverage-report
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    },
  },
})
