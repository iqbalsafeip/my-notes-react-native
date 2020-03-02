import React from 'react';

import { Modal, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';

function ModalNote(props) {
	const DATA = {
		content: props.value,
		title: props.judulVal,
		type: props.type,
		id: Date.now()
	};
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={props.modalVisible}
			onRequestClose={() => {
				props.setModalVisible(!props.modalVisible);
			}}
		>
			<View style={{ alignItems: 'center' }}>
				<ImageBackground source={require('../../../img/bgnote.jpg')} style={{ width: '100%', height: '100%' }}>
					<View style={styles.container}>
						<View style={{ width: '97%' }}>
							<TextInput
								style={styles.judulInput}
								value={props.judulVal}
								onChangeText={(e) => props.setJudul(e)}
								placeholder="Judul"
								placeholderTextColor="grey"
							/>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity
										style={[
											styles.button,
											{ backgroundColor: `${props.type === 'note' ? '#999999' : '#e8e8e8'}` }
										]}
										onPress={(e) => props.setType('note')}
									>
										<Text>Note</Text>
									</TouchableOpacity>

									<TouchableOpacity
										style={[
											styles.button,
											{ backgroundColor: `${props.type === 'diary' ? '#999999' : '#e8e8e8'}` }
										]}
										onPress={(e) => props.setType('diary')}
									>
										<Text>Diary</Text>
									</TouchableOpacity>
								</View>
								<View style={{ flexDirection: 'row' }}>
									{props.isEdit ? (
										<TouchableOpacity
											style={[ styles.button, { backgroundColor: '#e8e8e8' } ]}
											onPress={(e) => props.deleteNote(props.id)}
										>
											<Text>Delete</Text>
										</TouchableOpacity>
									) : null}

									{!props.isEdit ? (
										<TouchableOpacity
											style={[ styles.button, { backgroundColor: '#e8e8e8' } ]}
											onPress={() => {
												props.judulVal.length > 0 ? props.storeData(DATA) : null;
											}}
										>
											<Text>Save</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={[ styles.button, { backgroundColor: '#e8e8e8' } ]}
											onPress={() => {
												props.judulVal.length > 0 ? props.editNote(props.id) : null;
											}}
										>
											<Text>Save</Text>
										</TouchableOpacity>
									)}
								</View>
							</View>
							<View style={styles.textAreaContainer}>
								<TextInput
									style={styles.textArea}
									underlineColorAndroid="transparent"
									placeholder="Ketikan Sesuatu"
									placeholderTextColor="grey"
									multiline
									numberOfLines={1000}
									onChangeText={(e) => props.setValue(e)}
									value={props.value}
								/>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	textAreaContainer: {
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 6,
		marginVertical: 10,
		backgroundColor: 'white'
	},
	container: {
		width: '100%',
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textArea: {
		height: '84%',
		justifyContent: 'flex-start',
		textAlignVertical: 'top',
		padding: 10
	},
	judulInput: {
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 6,
		paddingHorizontal: 10,
		marginVertical: 10,
		fontWeight: 'bold',
		backgroundColor: 'white'
	},
	button: {
		backgroundColor: '#e8e8e8',
		width: 60,
		height: 35,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: 'grey'
	}
});

export default ModalNote;
