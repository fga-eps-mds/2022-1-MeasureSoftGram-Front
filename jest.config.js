module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    "@components/(.*)$": "<rootDir>/src/shared/components/$1",
    "@contexts/(.*)$": "<rootDir>/src/shared/contexts/$1",
    "@hooks/(.*)$": "<rootDir>/src/shared/hooks/$1",
    "@pages/(.*)$": "<rootDir>/src/pages/$1",
    "@services/(.*)$": "<rootDir>/src/shared/services/$1",
    "@public/(.*)$": "<rootDir>/public/$1",
    "@types/(.*)$": "<rootDir>/src/shared/types/$1",
    "@styles/(.*)$": "<rootDir>/styles/$1",
    "@utils/(.*)$": "<rootDir>/src/shared/utils/$1"
  }
}
