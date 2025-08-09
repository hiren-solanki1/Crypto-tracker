export default [
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'warn',
        },
    },
    {
        ignores: ['build/', 'dist/', 'node_modules/', 'vite.config.js'],
    },
];
