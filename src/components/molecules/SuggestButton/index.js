import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

function SuggestButton(props) {
	return (
		<View style={{ alignItems: 'center' }}>
			<TouchableOpacity style={styles.suggest} onPress={(e) => props.onPress(true)}>
				<Text>Start Write More...</Text>
				<Image
					source={{ uri: 'http://simpleicon.com/wp-content/uploads/plus.png' }}
					style={{ width: 30, height: 30, marginTop: -5 }}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	suggest: {
		width: '98%',
		flexDirection: 'row',
		height: 70,
		backgroundColor: 'white',
		marginTop: 10,
		borderRadius: 10,
		alignItems: 'center',
		padding: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		justifyContent: 'space-between',
		marginBottom: 10
	}
});

export default SuggestButton;
