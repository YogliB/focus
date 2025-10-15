declare module 'eslint-config-expo/flat.js' {
	import type { Linter } from 'eslint';
	// The shareable config may be a single object or an array; cover both.
	const config: Linter.FlatConfig | Linter.FlatConfig[];
	export default config;
}
