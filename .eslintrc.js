module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['node_modules/'],
    rules: {
        'react/jsx-uses-react': 2,
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        // remove when this guy will understand react
        // https://github.com/yannickcr/eslint-plugin-react/issues/2353
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
