import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
	title: string;
	onPress: () => void;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	loading?: boolean;
	style?: unknown;
}

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	loading = false,
	style,
}) => {
	const getVariantStyles = () => {
		const baseStyle = {
			alignItems: 'center' as const,
			justifyContent: 'center' as const,
			borderRadius: 8,
		};

		switch (variant) {
			case 'primary':
				return {
					...baseStyle,
					backgroundColor: '#3B82F6',
				};
			case 'secondary':
				return {
					...baseStyle,
					backgroundColor: '#6B7280',
				};
			case 'outline':
				return {
					...baseStyle,
					backgroundColor: 'transparent',
					borderWidth: 2,
					borderColor: '#3B82F6',
				};
			default:
				return {
					...baseStyle,
					backgroundColor: '#3B82F6',
				};
		}
	};

	const getSizeStyles = () => {
		switch (size) {
			case 'small':
				return { paddingHorizontal: 12, paddingVertical: 8 };
			case 'medium':
				return { paddingHorizontal: 16, paddingVertical: 12 };
			case 'large':
				return { paddingHorizontal: 24, paddingVertical: 16 };
			default:
				return { paddingHorizontal: 16, paddingVertical: 12 };
		}
	};

	const getTextStyle = () => {
		const baseTextStyle = {
			fontWeight: '500' as const,
		};

		const sizeMap = {
			small: { fontSize: 14 },
			medium: { fontSize: 16 },
			large: { fontSize: 18 },
		};

		const colorMap = {
			primary: { color: 'white' },
			secondary: { color: 'white' },
			outline: { color: '#3B82F6' },
		};

		if (disabled) {
			return {
				...baseTextStyle,
				...sizeMap[size],
				color: '#9CA3AF',
			};
		}

		return {
			...baseTextStyle,
			...sizeMap[size],
			...colorMap[variant],
		};
	};

	return (
		<Pressable
			onPress={disabled || loading ? undefined : onPress}
			style={[
				getVariantStyles(),
				getSizeStyles(),
				disabled && { opacity: 0.5 },
				style,
			]}
			disabled={disabled || loading}
		>
			{loading ? (
				<ActivityIndicator
					color={variant === 'outline' ? '#3B82F6' : 'white'}
				/>
			) : (
				<Text style={getTextStyle()}>{title}</Text>
			)}
		</Pressable>
	);
};
