# 환경 설명

## package.json
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest",   // 통과 및 실패가 있는 모든 테스트를 검색함
    "coverage": "jest --coverage", // 테스트도 실행하고 적용 범위도 수집함.
    "eject": "react-scripts eject",
    "client": "pnpm workspace client start",
    "client:build": "pnpm workspace client react-scripts build",
    "server": "pnpm workspace server start"
  },
```

## eslintrc.json
```json
{
    "env": {
        "browser": true, // 브라우저 환경에서 코드 실행을 허용합니다.
        "es2021": true, // ECMAScript 2021 문법을 사용할 수 있도록 설정합니다.
        "jest/globals": true // Jest 테스트 러너에서 전역 변수를 사용할 수 있도록 합니다.
    },
    "extends": [
        "plugin:react/recommended", // React 플러그인에서 추천하는 규칙을 사용합니다.
        "plugin:jest/recommended", // Jest 플러그인에서 추천하는 규칙을 사용합니다.
        "airbnb", // Airbnb 스타일 가이드를 기반으로 하는 규칙을 사용합니다.
        "prettier" // Prettier로 코드를 자동 포맷팅합니다.
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true // JSX 문법을 파싱할 수 있도록 설정합니다.
        },
        "ecmaVersion": "latest", // 최신 ECMAScript 버전을 사용합니다.
        "sourceType": "module" // 모듈 형식의 코드를 파싱합니다.
    },
    "plugins": ["react", "jest"], // React와 Jest 플러그인을 사용합니다.
    "rules": {
        "no-underscore-dangle": 0, // 밑줄(_) 사용을 허용합니다.
        "import/extensions": [
            "error", // 에러로 처리합니다.
            "ignorePackages", // 패키지에서는 확장자를 무시합니다.
            {
                "js": "always", // JS 파일에서는 항상 확장자를 사용합니다.
                "jsx": "always" // JSX 파일에서는 항상 확장자를 사용합니다.
            }
        ]
    }
}
```

## jest.config.js
```js
module.exports = {
  collectCoverage: true, // 취합 커버리지 가능
  collectCoverageFrom: ['src/**/*.{js,jsx}'], // 수집할 파일 적용 범위 지정
  coverageDirectory: 'coverage', 
  coverageThreshold: { //  커버리지 최소 기준 설정
    './src/': {
      statements: 95,  //  구문
      branches: 90,    // 분기
      functions: 95,   // 함수
      lines: 90,      // 줄
    },
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'], // An array of file extensions your modules use
  moduleNameMapper: {
    '\\.(svg|jpg|png|gif)$': '<rootDir>/src', // 이미지 파일 경로 
    // 필요한 경우에 따라 다른 모듈도 추가할 수 있습니다.
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules'
  ],
  transform: {
  // Use babel-jest to transpile tests with the next/babel preset
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  preset: 'ts-jest',
  verbose: true, // 테스트 시, 터널에 describe, test name 출력 여부
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'] // 작성하는 모든 테스트 코드에 대해 jest 구성(jest.setup.js)을 로드한다.
}
```

## babel.config.js
```js
module.exports = {
  presets: [
    // '@babel/preset-env'는 현재 환경을 기준으로 지원되는 JavaScript 문법 및 기능을 사용할 수 있는 코드로 변환합니다.
    ['@babel/preset-env', { targets: { node: 'current' } }],
    
    // '@babel/preset-react'는 React 애플리케이션의 JSX 문법을 자바스크립트로 변환하는 데 사용됩니다.
    '@babel/preset-react',
    
    // '@babel/preset-typescript'는 TypeScript 코드를 JavaScript 코드로 변환하는 데 사용됩니다.
    '@babel/preset-typescript',
  ],
};
```