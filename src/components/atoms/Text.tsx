import React from 'react';
import { Text as RNText } from 'react-native';

interface TextProps {
	children: React.ReactNode;
	variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small';
	color?: 'primary' | 'secondary' | 'muted' | 'white' | 'black';
	align?: 'left' | 'center' | 'right';
	style?: unknown;
}

export const Text: React.FC<TextProps> = ({
	children,
	variant = 'body',
	color = 'black',
	align = 'left',
	style,
}) => {
	const getVariantStyles = () => {
		switch (variant) {
			case 'h1':
				return {
					fontSize: 24,
					fontWeight: 'bold' as const,
				};
			case 'h2':
				return {
					fontSize: 20,
					fontWeight: '600' as const,
				};
			case 'h3':
				return {
					fontSize: 18,
					fontWeight: '500' as const,
				};
			case 'body':
				return {
					fontSize: 16,
				};
			case 'caption':
				return {
					fontSize: 14,
				};
			case 'small':
				return {
					fontSize: 12,
				};
			default:
				return {
					fontSize: 16,
				};
		}
	};

	const getColorStyles = () => {
		switch (color) {
			case 'primary':
				return { color: '#3B82F6' };
			case 'secondary':
				return { color: '#6B7280' };
			case 'muted':
				return { color: '#9CA3AF' };
			case 'white':
				return { color: 'white' };
			case 'black':
				return { color: 'black' };
			default:
				return { color: 'black' };
		}
	};

	const getAlignStyles = () => {
		switch (align) {
			case 'center':
				return { textAlign: 'center' as const };
			case 'right':
				return { textAlign: 'right' as const };
			default:
				return { textAlign: 'left' as const };
		}
	};

	return (
		<RNText
			style={[
				getVariantStyles(),
				getColorStyles(),
				getAlignStyles(),
				style,
			]}
		>
			{children}
		</RNText>
	);
};
