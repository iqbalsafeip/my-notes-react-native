import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

function SortButtons(props) {
	return (
		<View style={{ flexDirection: 'row', marginVertical: 6, justifyContent: 'space-between' }}>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={[
						styles.btnSort,
						{ backgroundColor: `${props.stateSort === 'all' ? '#c4ffe2' : '#ebebeb'}` }
					]}
					onPress={(e) => props.sortBy('all')}
				>
					<Text>All</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.btnSort,
						{ backgroundColor: `${props.stateSort === 'note' ? '#c4ffe2' : '#ebebeb'}` }
					]}
					onPress={(e) => props.sortBy('note')}
				>
					<Text>Note</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.btnSort,
						{ backgroundColor: `${props.stateSort === 'diary' ? '#c4ffe2' : '#ebebeb'}` }
					]}
					onPress={(e) => props.sortBy('diary')}
				>
					<Text>Diary</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TextInput
					style={{ width: 200, height: 40, backgroundColor: '#ebebeb', padding: 10, borderRadius: 6 }}
					placeholder="Search Notes/Diaries"
					value={props.valueSearch}
					onChangeText={(e) => props.onChange(e)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	btnSort: {
		width: 50,
		height: 40,
		backgroundColor: '#ebebeb',
		marginHorizontal: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6
	}
});

export default SortButtons;
