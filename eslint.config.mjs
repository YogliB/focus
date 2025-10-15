// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs as tsConfigs } from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import expoConfig from 'eslint-config-expo/flat.js';

export default defineConfig(
	eslint.configs.recommended,
	tsConfigs.recommended,
	expoConfig,
	eslintPluginPrettierRecommended,
);
