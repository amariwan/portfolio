import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	moduleNameMapper: {
		'^@/once-ui/components$': '<rootDir>/src/once-ui/components/index.ts', // angepasst von .tsx zu .ts
		'^@/once-ui/components/(.*)$': '<rootDir>/src/once-ui/components/$1',
		'^@/app/resources/content(.*)$': '<rootDir>/src/app/resources/content$1',
		'^@/app/(.*)$': '<rootDir>/src/app/$1',
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
	},
}

export default createJestConfig(config)
