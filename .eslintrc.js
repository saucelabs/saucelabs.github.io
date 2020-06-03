module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        indent: [2, 4]
    }
}
