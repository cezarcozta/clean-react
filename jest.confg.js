module.exports = {
   roots: ['<rootDir>/src'],
   coverageDirectory: 'coverage',
   testPathIgnorePatterns: [
     '<rootDir>/node_modules/',
   ],
   testEnvironment: 'jsdom',
   transform: {
     '.+\\.(ts|tsx)$': 'ts-jest'
   },
   moduleNameMapper: {
     '@/(.*)': '<rootDir>/src/$1',
     '\\.scss$': 'identity-obj-proxy'
   }
 }