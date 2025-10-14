// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import expoConfig from 'eslint-config-expo/flat';

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	expoConfig,
	eslintPluginPrettierRecommended,
);
