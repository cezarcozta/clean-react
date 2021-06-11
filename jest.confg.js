module.exports = {
   roots: ['<rootDir>/src'],
   coverageDirectory: 'coverage',
   testPathIgnorePatterns: [
     '<rootDir>/node_modules/',
   ],
   testEnvironment: 'jsdom',
   transform: {
    '+\\.js$': 'babel-jest',
    '.+\\.(ts|tsx)$': 'ts-jest'
   },
   moduleNameMapper: {
     '@/(.*)': '<rootDir>/src/$1',
      '\\.(css|scss)$': 'identity-obj-proxy'
   }
 }