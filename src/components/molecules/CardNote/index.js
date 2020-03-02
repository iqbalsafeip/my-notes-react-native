import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Image, View, Text, StatusBar, TouchableOpacity } from 'react-native';

const image = {
	diary: require('../../../icon/note2.png'),
	note: require('../../../icon/note1.png')
};

function CardNote(props) {
	const ToView = {
		content: props.content,
		title: props.title,
		type: props.type,
		visible: true,
		id: props.id
	};
	return (
		<TouchableOpacity style={styles.cardnote} onPress={(e) => props.onLook(ToView)}>
			<View
				style={{
					alignItems: 'center',
					flexDirection: 'row',
					paddingHorizontal: 20,
					paddingTop: 10
				}}
			>
				<Image source={props.type === 'diary' ? image.diary : image.note} style={{ width: 60, height: 60 }} />
				<Text style={styles.notetitle}>{props.title}</Text>
			</View>
			<TouchableOpacity
				style={{
					width: '100%',
					height: 50,
					borderTopWidth: 1,
					borderColor: '#e6e6e6',
					paddingVertical: 6,
					paddingHorizontal: 20
				}}
				onPress={(e) => props.onView(ToView)}
			>
				<Text style={{ color: '#b3b3b3' }}>Edit Note..</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	suggest: {
		width: '100%',
		flexDirection: 'row',
		height: 80,
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
	},
	container: {
		flex: 1,
		alignItems: 'center',
		width: '95%',
		marginHorizontal: 'auto'
	},

	jumbotron: {
		height: 200,
		width: '100%',
		marginTop: 10,
		borderRadius: 10,
		overflow: 'hidden'
	},
	cardnote: {
		width: '100%',
		height: 110,
		backgroundColor: 'white',
		marginTop: 10,
		borderRadius: 10,
		overflow: 'hidden',
		borderColor: '#e6e6e6',
		borderWidth: 1
	},
	notetitle: {
		fontWeight: '300',
		fontSize: 15,
		fontFamily: 'roboto',
		marginLeft: 10
	}
});

export default CardNote;
