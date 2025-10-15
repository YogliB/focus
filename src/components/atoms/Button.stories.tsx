import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		title: {
			control: 'text',
			description: 'The text displayed on the button',
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'outline'],
			description: 'The visual style variant of the button',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'The size of the button',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		loading: {
			control: 'boolean',
			description: 'Whether the button shows a loading state',
		},
		onPress: {
			action: 'pressed',
			description: 'Function called when button is pressed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: StoryObj<typeof Button> = {
	args: {
		title: 'Press me',
		onPress: () => console.log('Button pressed'),
	},
};

export const Primary: Story = {
	args: {
		title: 'Primary Button',
		variant: 'primary',
		onPress: () => console.log('Primary button pressed'),
	},
};

export const Secondary: Story = {
	args: {
		title: 'Secondary Button',
		variant: 'secondary',
		onPress: () => console.log('Secondary button pressed'),
	},
};

export const Outline: Story = {
	args: {
		title: 'Outline Button',
		variant: 'outline',
		onPress: () => console.log('Outline button pressed'),
	},
};

export const Small: Story = {
	args: {
		title: 'Small Button',
		size: 'small',
		onPress: () => console.log('Small button pressed'),
	},
};

export const Large: Story = {
	args: {
		title: 'Large Button',
		size: 'large',
		onPress: () => console.log('Large button pressed'),
	},
};

export const Disabled: Story = {
	args: {
		title: 'Disabled Button',
		disabled: true,
		onPress: () => console.log('This should not be called'),
	},
};

export const Loading: Story = {
	args: {
		title: 'Loading Button',
		loading: true,
		onPress: () => console.log('This should not be called'),
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col space-y-4">
			<Button title="Primary" variant="primary" onPress={() => {}} />
			<Button title="Secondary" variant="secondary" onPress={() => {}} />
			<Button title="Outline" variant="outline" onPress={() => {}} />
		</div>
	),
};
