import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from './Timer';

const meta: Meta<typeof Timer> = {
	title: 'Molecules/Timer',
	component: Timer,
	argTypes: {
		initialMinutes: {
			control: { type: 'number', min: 1, max: 60 },
			description: 'Initial minutes for the timer',
		},
		onComplete: {
			action: 'completed',
			description: 'Function called when timer reaches zero',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Timer>;

export const Default: Story = {
	args: {
		initialMinutes: 5,
		onComplete: () => console.log('Timer completed!'),
	},
};

export const OneMinute: Story = {
	args: {
		initialMinutes: 1,
		onComplete: () => console.log('1 minute timer completed!'),
	},
};

export const TenMinutes: Story = {
	args: {
		initialMinutes: 10,
		onComplete: () => console.log('10 minute timer completed!'),
	},
};

export const TimerStates: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-semibold mb-2">5 Minute Timer</h3>
				<Timer
					initialMinutes={5}
					onComplete={() => console.log('5 min completed')}
				/>
			</div>
			<div>
				<h3 className="text-lg font-semibold mb-2">1 Minute Timer</h3>
				<Timer
					initialMinutes={1}
					onComplete={() => console.log('1 min completed')}
				/>
			</div>
		</div>
	),
};
