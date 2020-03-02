import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

function Jumbotron(props) {
	return (
		<View style={styles.jumbotron}>
			<View style={{ position: 'relative' }}>
				<Text style={styles.textHeading}>Write And Make A History</Text>
				<Image source={require('../../../img/test.jpg')} style={{ width: '100%', height: '100%' }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	jumbotron: {
		height: 180,
		width: '100%',
		marginTop: 10,
		borderRadius: 10,
		overflow: 'hidden'
	},
	textHeading: {
		position: 'absolute',
		zIndex: 99,
		fontSize: 30,
		fontFamily: 'monospace',
		fontWeight: 'bold',
		bottom: 20,
		left: 20,
		color: '#59945a'
	}
});

export default Jumbotron;
