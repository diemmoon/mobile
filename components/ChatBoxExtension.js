import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { responsiveHeight } from "react-native-responsive-dimensions";

const ChatBoxExtension = ({openExtensions, isStretch, setIsChatInputFocus, setExtensionVisible}) => {
    
    const openImagePicker = ()=>{
        console.log('chua lam lấy hinh');
    }
    const openFile = ()=>{
        console.log('chua lam lấy file');
    }
    return (
        <View style={styles.buttonWrapper}>
            <TouchableHighlight style={styles.button}
                underlayColor={'#98B4A6'}
                onPress={() => {
                    // openExtensions(OPEN_IMAGE);
                    openImagePicker();
                }}
            >
                <Ionicons name="md-image" size={26} color="#64868E" style={styles.icon} />
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.button}
                underlayColor={'#98B4A6'}
                onPress={() => {
                    // openExtensions(OPEN_CAMERA);
                    openFile();
                }}
            >
                <MaterialIcons name="attach-file" size={26} color="#64868E" style={styles.icon} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        paddingVertical: 8,
    },
    button: {
        height: responsiveHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: responsiveHeight(1.8),
        marginRight: -responsiveHeight(1),
        borderRadius: 30,
    },
    icon: {

    },
})
export default ChatBoxExtension
