import React from 'react';
import { Modal, View, Text, ScrollView, ImageBackground } from 'react-native';

// function myFunction() {

// 	var d = new Date();
// 	d.setTime(Date.now());
// 	document.getElementById("demo").innerHTML = d;
//   }

function ModalView(props) {
	let d = new Date();
	d.setTime(props.id);
	let date = d.toDateString();
	return (
		<React.Fragment>
			<Modal
				animationType="slide"
				transparent={false}
				visible={props.visible}
				// visible={false}
				onRequestClose={() => {
					props.setModalVisible(!props.visible);
				}}
			>
				<View>
					<ImageBackground
						source={require('../../../img/bgview.jpg')}
						style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
					>
						<View
							style={{
								alignItems: 'center',
								backgroundColor: 'white',
								width: '94%',
								height: '96%',
								borderRadius: 16
							}}
						>
							<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{props.title}</Text>
							<Text style={{ marginVertical: 6 }}>{date}</Text>
							<View
								style={{
									width: '90%',
									borderTopWidth: 2,
									borderColor: '#e6e6e6',
									marginTop: 10,
									padding: 10
								}}
							>
								<ScrollView style={{ width: '100%', height: '80%' }}>
									<Text>{props.content}</Text>
								</ScrollView>
							</View>
						</View>
					</ImageBackground>
				</View>
			</Modal>
		</React.Fragment>
	);
}

export default ModalView;
