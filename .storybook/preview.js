import { View } from 'react-native';
import { Preview as PreviewBase } from '@storybook/react-native';

const Preview = () => {
	return (
		<View style={{ flex: 1 }}>
			<PreviewBase />
		</View>
	);
};

export default Preview;
