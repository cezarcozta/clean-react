module.exports = {
   roots: ['<rootDir>/src'],
   coverageDirectory: 'coverage',
   testPathIgnorePatterns: [
     '<rootDir>/node_modules/',
   ],
   testEnvironment: 'jsdom',
   transform: {
     '.+\\.(ts|tsx)$': 'babel-jest'
   },
   moduleNameMapper: {
     '@/(.*)': '<rootDir>/src/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
   }
 }