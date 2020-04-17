module.exports = {
	extends: [ 'airbnb/base', 'prettier', 'plugin:cypress/recommended' ],
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		'no-console': 0,
		'no-restricted-syntax': 0,
		'no-await-in-loop': 0,
		'no-unused-expressions': 0,
		'prefer-destructuring': 0,
		'no-plusplus': 0,
		'no-unused-vars': ['error', { args: 'none' }],
	},
	env: {
		node: true,
		mocha: true
	}
};
