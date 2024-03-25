/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
// craco.config.js
const path = require('path');
const eslintConfig = require('./.eslintrc');
// const { CracoAliasPlugin } = require('react-app-alias');

/** 해당 프로젝트는 CRA 유형의 프로젝트이기 때문에 craco.config.js 에 명시되어 있는
 * 환경설정 코드들을 컴파일하여 빌드를 한다.
 */
module.exports = {
  // webpack 환경설정
  webpack: {
    configure: (originalWebpackConfig, { env }) => {
      const customConfig = originalWebpackConfig;
      if (env === 'development') {
        customConfig.mode = 'development';
      } else {
        customConfig.mode = 'production';
      }
      return customConfig;
    },
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@tests': path.resolve(__dirname, 'src/tests'),
      '@@types/*': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@test': path.resolve(__dirname, 'src/test'),
      '@env': path.resolve(__dirname, 'env'),
    },
  },
  babel: {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  },
  typescript: {
    enableTypeChecking: true,
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: originalEslintConfig => {
      const customEslintConfig = { ...originalEslintConfig, ...eslintConfig };
      // Add environment-specific ESLint settings

      return customEslintConfig;
    },
  },
  // plugins: [
  // {
  //   plugin: CracoAliasPlugin,
  //   options: {
  //     source: 'tsconfig',
  //     baseUrl: '.',
  //     tsConfigPath: './tsconfig.paths.json', // 위에서 작성한 tsconfig.paths.json입니다.
  //   },
  // },
  // ],
};
