/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
	FlatList,
	StyleSheet,
	View,
	Text,
	Modal,
	TouchableHighlight,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import CardNote from './src/components/molecules/CardNote';
import Jumbotron from './src/components/molecules/Jumbotron';
import SuggestButton from './src/components/molecules/SuggestButton';
import ModalNote from './src/components/molecules/ModalNote';
import SortButtons from './src/components/molecules/SortButtons';
import ModalView from './src/components/molecules/ModalView';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			value: '',
			type: 'note',
			judul: '',
			data: new Array(),
			id: null,
			sortBy: 'all',
			isEdit: false,
			visible: false,
			valueSearch: ''
		};
	}

	UNSAFE_componentWillMount() {
		if (this.state.sortBy === 'all') {
			this._retrieveData();
		}
	}

	_retrieveData = async () => {
		console.log('anjay');

		try {
			const value = await AsyncStorage.getItem('notes');
			if (value !== null) {
				this.setState({ data: JSON.parse(value) });
			}
		} catch (error) {}
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	createNote = (visible) => {
		this.setState({
			modalVisible: visible,
			value: '',
			type: 'note',
			judul: '',
			isEdit: false
		});
	};

	deleteNote = (noteId) => {
		this.setState(
			(prevState) => {
				const data = prevState.data.filter((note) => note.id !== noteId);
				return {
					data
				};
			},
			async () => {
				try {
					await AsyncStorage.setItem('notes', JSON.stringify(this.state.data));
					this.setModalVisible(false);
				} catch (error) {
					console.log(error);
				}
			}
		);
	};

	editNote = async (noteId) => {
		this.setState(
			(prevState, props) => {
				const data = prevState.data.map((note, i) => {
					console.log('data on map', note);

					if (note.id === noteId) {
						return {
							content: prevState.value,
							type: prevState.type,
							title: prevState.judul,
							id: noteId
						};
					} else return note;
				});

				console.log('data', data);

				return {
					data
				};
			},
			async () => {
				try {
					await AsyncStorage.setItem('notes', JSON.stringify(this.state.data));
					this.setModalVisible(false);
				} catch (error) {
					console.log(error);
				}
			}
		);
	};

	setView = (data) => {
		this.setState({
			modalVisible: data.visible,
			value: data.content,
			type: data.type,
			judul: data.title,
			id: data.id,
			isEdit: true
		});
	};

	setLook = (data) => {
		this.setState({
			value: data.content,
			type: data.type,
			judul: data.title,
			id: data.id,
			visible: data.visible
		});
	};

	storeData = (datas) => {
		this.setState(
			(Prevstate, props) => {
				const data = Prevstate.data.concat(datas);
				return {
					data
				};
			},
			async () => {
				console.log('datanya' + this.state.data);
				try {
					await AsyncStorage.setItem('notes', JSON.stringify(this.state.data));
					this.setModalVisible(false);
				} catch (error) {
					console.log(error);
				}
			}
		);
	};

	setValue = (e) => {
		this.setState({ value: e });
	};

	setType = (type) => {
		this.setState({ type });
	};

	setJudul = (judul) => {
		this.setState({ judul });
	};

	sortBy = async (type) => {
		await this._retrieveData();
		type !== 'all'
			? this.setState((prevState, props) => {
					console.log(type);
					return {
						data: prevState.data.filter((note) => note.type === type),
						sortBy: type
					};
				})
			: this.setState({ sortBy: type });
	};

	onSearchHandle = (data) => {
		this.setState({ valueSearch: data }, async () => {
			await this._retrieveData();
			this.setState((prevState, props) => {
				const { valueSearch, data } = this.state;
				let datas = data.filter((note) => note.title.indexOf(valueSearch) >= 0);
				return {
					data: datas
				};
			});
		});
	};

	render() {
		const { data, sortBy, valueSearch } = this.state;
		return (
			<React.Fragment>
				<View style={{ alignItems: 'center' }}>
					<ScrollView style={styles.container}>
						<Jumbotron />
						<SuggestButton onPress={this.createNote} />
						<SortButtons
							sortBy={this.sortBy}
							stateSort={sortBy}
							valueSearch={valueSearch}
							onChange={this.onSearchHandle}
						/>
						{data.length > 0 ? (
							this.state.data.map((note, i) => {
								return <CardNote {...note} onView={this.setView} onLook={this.setLook} key={i} />;
							})
						) : (
							<View style={{ alignItems: 'center', padding: 20 }}>
								<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notes/Diaries Not Found</Text>
								<Image
									style={{ width: 260, height: 200, marginTop: 20 }}
									source={require('./src/img/notask.png')}
								/>
							</View>
						)}
						<View
							style={{
								justifyContent: 'center',
								borderColor: '#e6e6e6',
								borderTopWidth: 1,
								alignItems: 'center',
								marginTop: 30,
								paddingVertical: 10
							}}
						>
							<Text style={{ color: '#c7c7c7' }}>Credit : @iqbalsafei. Indonesia, Garut 2019</Text>
						</View>
					</ScrollView>
					<ModalNote
						value={this.state.value}
						modalVisible={this.state.modalVisible}
						setValue={this.setValue}
						setModalVisible={this.setModalVisible}
						type={this.state.type}
						judulVal={this.state.judul}
						setType={this.setType}
						setJudul={this.setJudul}
						storeData={this.storeData}
						id={this.state.id}
						deleteNote={this.deleteNote}
						editNote={this.editNote}
						isEdit={this.state.isEdit}
					/>

					<ModalView
						visible={this.state.visible}
						setModalVisible={(visible) => this.setState({ visible })}
						title={this.state.judul}
						content={this.state.value}
						id={this.state.id}
					/>
				</View>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '95%'
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

export default App;
