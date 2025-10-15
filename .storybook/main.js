module.exports = {
	stories: [
		'../src/components/**/*.stories.?(ts|tsx|js|jsx)',
		'../src/**/*.stories.?(ts|tsx|js|jsx)',
	],
	addons: [
		'@storybook/addon-ondevice-controls',
		'@storybook/addon-ondevice-actions',
	],
	framework: {
		name: '@storybook/react-native',
		options: {},
	},

	typescript: {
		check: false,
		reactDocgen: false,
	},
};
