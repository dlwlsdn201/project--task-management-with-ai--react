module.exports = {
  collectCoverage: false, // 취합 커버리지 가능
  collectCoverageFrom: ['src/**/*.{js,jsx}'], // 수집할 파일 적용 범위 지정
  coverageDirectory: 'coverage',
  coverageThreshold: {
    './src/': {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 90,
    },
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\\.(svg|jpg|png|gif)$': '<rootDir>/src/',
    // '\\.(svg|jpg|png|gif)$': '<rootDir>/__tests__/__mocks__/$1',
    // 필요한 경우에 따라 다른 모듈도 추가할 수 있습니다.
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    // '^.+\\.(js|jsx)$': 'babel-jest', // javascript 만 사용할 경우
  },
  preset: 'ts-jest',
  // transformIgnorePatterns: ['^.+\\.module\\.(css|sass|scss)$'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 작성하는 모든 테스트 코드에 대해 jest 구성(jest.setup.js)을 로드한다.
};