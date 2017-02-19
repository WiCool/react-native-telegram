import React from 'react';
import Dimensions from 'Dimensions';
import { 
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import * as colors from '../../colors';
import * as utils from '../../utils';
import imgLogout from '../../images/logout.png';

const EXAMPLE_NAME = 'Lutfi Dwica';
const { width, height } = Dimensions.get('window');

const ControlPanel = props => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={[styles.circle, {backgroundColor: colors.random()}]}>
					<Text style={styles.shortText}>
						{utils.firstLetter(EXAMPLE_NAME)}
					</Text>
				</View>
				<Text numberOfLines={1} style={styles.h1}>
					{EXAMPLE_NAME}
				</Text>
				<Text numberOfLines={1} style={styles.h2}>
					lutfi@example.com
				</Text>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity style={styles.button}>
					<Image source={imgLogout} style={styles.buttonImg} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Image source={imgLogout} style={styles.buttonImg} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Image source={imgLogout} style={styles.buttonImg} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: colors.BASIC,
	},
	top: {
		height: height * 0.22,
		backgroundColor: 'gray',
	},
	bottom: {
		height: height * 0.88,
		borderColor: colors.BORDER,
		borderRightWidth: 1,
		paddingVertical: height * 0.01,
	},
	shortText: {
		color: colors.BASIC,
		fontSize: width * 0.07,
		fontWeight: 'bold',
	},
	h1: {
		color: colors.BASIC,
		fontSize: width * 0.04,
		fontWeight: 'bold',
		marginHorizontal: width * 0.05,
	},
	h2: {
		color: colors.BASIC,
		fontSize: width * 0.04,
		marginHorizontal: width * 0.05,
		marginBottom: width * 0.05,
	},
	circle: {
		margin: width * 0.05,
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.15,
		height: width * 0.15,
		borderRadius: width * 0.3,
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: width * 0.03,
		paddingVertical: width * 0.02,
	},
	buttonImg: {
		width: width * 0.07,
		height: width * 0.07,
	},
	buttonText: {
		fontSize: 14,
		marginLeft: 20,
	},
});

export default ControlPanel;