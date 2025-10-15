// @ts-check

import storybook from 'eslint-plugin-storybook';
import { configs as jsConfigs } from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs as tsConfigs } from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import expoConfig from 'eslint-config-expo/flat.js';

export default defineConfig(
	jsConfigs.recommended,
	tsConfigs.recommended,
	expoConfig,
	storybook.configs['flat/recommended'],
	eslintPluginPrettierRecommended,
);
