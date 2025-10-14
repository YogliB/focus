module.exports = {
	root: true,
	extends: [
		'@react-native',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'react',
		'react-native',
		'react-hooks',
		'prettier',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^_' },
		],
		'react-native/no-unused-styles': 'error',
		'react-native/split-platform-components': 'error',
		'react-native/no-inline-styles': 'warn',
		'react-native/no-color-literals': 'warn',
	},
	env: {
		'react-native/react-native': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
