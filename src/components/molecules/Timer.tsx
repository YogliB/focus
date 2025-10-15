import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

interface TimerProps {
	initialMinutes?: number;
	onComplete?: () => void;
}

export const Timer: React.FC<TimerProps> = ({
	initialMinutes = 5,
	onComplete,
}) => {
	const [minutes, setMinutes] = useState(initialMinutes);
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isActive && !isPaused) {
			interval = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						setIsActive(false);
						onComplete?.();
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				} else {
					setSeconds(seconds - 1);
				}
			}, 1000);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isActive, isPaused, minutes, seconds, onComplete]);

	const formatTime = (mins: number, secs: number) => {
		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	};

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePause = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setIsPaused(false);
		setMinutes(initialMinutes);
		setSeconds(0);
	};

	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				padding: 24,
				backgroundColor: 'white',
				borderRadius: 8,
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.1,
				shadowRadius: 4,
				elevation: 3,
			}}
		>
			<Text variant="h1" color="primary" style={{ marginBottom: 16 }}>
				{formatTime(minutes, seconds)}
			</Text>

			<View
				style={{
					flexDirection: 'row',
					gap: 12,
				}}
			>
				{!isActive || isPaused ? (
					<Button
						title="Start"
						onPress={handleStart}
						variant="primary"
					/>
				) : (
					<Button
						title="Pause"
						onPress={handlePause}
						variant="secondary"
					/>
				)}

				<Button title="Reset" onPress={handleReset} variant="outline" />
			</View>

			{isActive && !isPaused && (
				<Text variant="caption" color="muted" style={{ marginTop: 16 }}>
					Meditation in progress...
				</Text>
			)}

			{isPaused && (
				<Text variant="caption" color="muted" style={{ marginTop: 16 }}>
					Meditation paused
				</Text>
			)}
		</View>
	);
};
