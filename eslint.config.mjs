// @ts-check

import storybook from 'eslint-plugin-storybook';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { configs as tsConfigs } from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import expoConfig from 'eslint-config-expo/flat.js';
import { configs as sonarjsConfigs } from 'eslint-plugin-sonarjs';
import importPlugin from 'eslint-plugin-import';

const { configs: eslintConfigs } = eslint;

export default defineConfig(
	globalIgnores([
		'!.storybook/**',
		'!.rnstorybook/**',
		'.rnstorybook/storybook.requires.ts',
	]),
	eslintConfigs.recommended,
	tsConfigs.recommended,
	expoConfig,
	storybook.configs['flat/recommended'],
	sonarjsConfigs.recommended,
	eslintPluginPrettierRecommended,
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			importPlugin.flatConfigs.recommended,
			importPlugin.flatConfigs.typescript,
		],
	},
	{ rules: { 'prettier/prettier': 'error' } },
);
