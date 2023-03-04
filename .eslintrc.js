module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [
            'HomerLogoTitle',
            `./src/components/Auth/HomerLogoTitle.${
              process.env.APP || 'homer'
            }.js`,
          ],
          [
            'videos/IntroVideo.mp4',
            `./src/videos/${process.env.APP || 'homer'}/IntroVideo.mp4`,
          ],
        ],
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
          '.homer.js',
          '.nornorm.js',
          '.mp4',
          '.png',
          '.webp',
        ],
      },
      'babel-module': {
        root: ['./src'],
        alias: {
          videos: videoPath,
          locales: langPath,
          images: imagesPath,
          helpers: helpersPath,
        },
      },
    },
  },
  plugins: ['module-resolver'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-bind': [
      'warn',
      {
        allowBind: false,
      },
    ],
    'react/forbid-prop-types': ['warn'],
    'react/require-default-props': ['warn'],
    'import/prefer-default-export': 'warn',
    'import/no-named-as-default': 'off',
    'no-confusing-arrow': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'warn',
    'no-shadow': 'warn',
    'no-await-in-loop': 'warn',
    'no-underscore-dangle': ['off'],
    'max-len': [1],
    'no-param-reassign': 'warn',
    'brace-style': 'warn',
    'no-return-assign': 'warn',
    'arrow-body-style': 'warn',
    'no-use-before-define': 'warn',
    'global-require': 'off',
    'no-unused-vars': 'error',
    'template-curly-spacing': 'off',
    indent: ['warn', 2, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
    camelcase: [
      'error',
      {
        properties: 'never',
        allow: ['^UNSAFE_'],
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'UNSAFE_componentWillMount',
          'UNSAFE_componentWillReceiveProps',
          'UNSAFE_componentWillUpdate',
        ],
      },
    ],
    'module-resolver/use-alias': ['warn'],
    'react/jsx-indent-props': ['warn', 2],
    'react/prop-types': 1,
  },
};
