import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
	title: 'Atoms/Text',
	component: Text,
	argTypes: {
		children: {
			control: 'text',
			description: 'The text content to display',
		},
		variant: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'body', 'caption', 'small'],
			description: 'The typography variant',
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'muted', 'white', 'black'],
			description: 'The color variant of the text',
		},
		align: {
			control: 'select',
			options: ['left', 'center', 'right'],
			description: 'The text alignment',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'Default text content',
	},
};

export const Heading1: Story = {
	args: {
		children: 'Heading 1',
		variant: 'h1',
	},
};

export const Heading2: Story = {
	args: {
		children: 'Heading 2',
		variant: 'h2',
	},
};

export const Heading3: Story = {
	args: {
		children: 'Heading 3',
		variant: 'h3',
	},
};

export const Body: Story = {
	args: {
		children:
			'This is body text content that would typically be used for longer paragraphs in the meditation app.',
		variant: 'body',
	},
};

export const Caption: Story = {
	args: {
		children: 'Caption text',
		variant: 'caption',
	},
};

export const Small: Story = {
	args: {
		children: 'Small text',
		variant: 'small',
	},
};

export const Primary: Story = {
	args: {
		children: 'Primary colored text',
		color: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary colored text',
		color: 'secondary',
	},
};

export const Muted: Story = {
	args: {
		children: 'Muted colored text',
		color: 'muted',
	},
};

export const White: Story = {
	args: {
		children: 'White colored text',
		color: 'white',
	},
};

export const CenterAligned: Story = {
	args: {
		children: 'Center aligned text',
		align: 'center',
	},
};

export const RightAligned: Story = {
	args: {
		children: 'Right aligned text',
		align: 'right',
	},
};

export const TypographyShowcase: Story = {
	render: () => (
		<div className="space-y-4">
			<Text variant="h1" color="primary">
				Meditation App
			</Text>
			<Text variant="h2">Welcome to Focus</Text>
			<Text variant="h3">Choose your meditation</Text>
			<Text variant="body">
				Find peace and mindfulness with our guided meditation sessions.
				Each session is designed to help you relax and center your
				thoughts.
			</Text>
			<Text variant="caption" color="muted">
				Start your journey to better mental wellness today
			</Text>
		</div>
	),
};
