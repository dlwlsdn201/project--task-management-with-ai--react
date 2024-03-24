module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import', 'jest', 'prettier'],
  overrides: [
    {
      files: ['__tests__/**/*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
      env: {
        jest: true,
      },
    },
    {
      // .js 형식의 환경설정 파일을 module.exports 혀옹 하기 위한 설정
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js'],
    },
    {
      // .ts, .tsx 에만 @typescript-eslint/recommended 플러그인 적용
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
  rules: {
    'no-var': 2, // var 사용시 오류
    eqeqeq: 1, // 일치 연산자(===,!==) 미사용 시 경고
    'no-unused-vars': 1, // 사용하지 않는 변수가 있을 때 발생하는 기본경고 비활성화
    '@typescript-eslint/no-unused-vars': 1, // 사용하지 않는 변수 또는 import에 대해 오류
    'global-require': 0, // require import 허용
    'import/prefer-default-export': 1, // export문이 하나일 때 default 미사용 시 오류
    'no-extra-semi': 2, // 불필요한 세미콜론 사용 시 오류
    'react/jsx-filename-extension': [
      // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-console': 1, // console.* 사용 시 경고
    // 'react-hooks/rules-of-hooks': 2, // react hooks 사용시 use로 시작하거나 PascalCase 이름을 가진 컴포넌트의 내부가 아니면 오류
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // boolean 타입은 'is', 'should', 'has', 'can', 'did', 'will' 로 시작하기(함수에는 적용 X)
        format: ['PascalCase'],
        selector: ['variable'],
        types: ['boolean'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
    'react/jsx-pascal-case': 2, // 컴포넌트 이름이 PascalCase 아닐 시 오류(선언 시 오류아님, 사용 시에만)
    'react-hooks/exhaustive-deps': 1, // react hooks의 의존성 배열이 충분하지 않을 때 오류
    'react/jsx-key': 'error', // 반복문으로 생성하는 element에 key 없으면 오류
    'no-debugger': 1, // debugger 사용시 경고
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // prettier 충돌 방지
    'react/function-component-definition': [
      // 컴포넌트가 화살표 함수 아니면 오류
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'no-unsafe-argument': 0,
    'func-style': ['error', 'expression', { allowArrowFunctions: true }], // 일반 함수가 화살표 함수 아니면 오류
    'no-nested-ternary': 1, // 삼항연산자 2번 이상 중첩 시 경고
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }], // props spreading 경고 표시
    'import/extensions': 0, // import 한 컴포넌트 파일 확장자 미입력 허용
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'no-shadow': 2, // 스코프 바깥에서도 같은 이름 변수 선언 시 오류
    'react/button-has-type': 1, // 버튼 타입 미입력 시 경고
    'jsx-a11y/no-noninteractive-element-interactions': 1, // 상호작용 불가한 element에 대해 이벤트 경고
    'jsx-a11y/control-has-associated-label': 1, // aria-label 미입력시 경고
    'jsx-a11y/click-events-have-key-events': 2, // 상호작용 불가한 element에 대해 클릭 & 키보드 이벤트 따로 적용 시 오류
    'jsx-a11y/no-static-element-interactions': 1, // 상호작용 불가한 element에 이벤트 적용 시 role 미입력 시 오류
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
