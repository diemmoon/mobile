import React from 'react'
import { View, Text, Pressable, TouchableHighlight, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome5, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight } from "react-native-responsive-dimensions";
import { theme } from '../../core/theme';

const ChatRightHeader = ({chatRoomID}) => {

    const color = theme.colors.primary;

    const navigation = useNavigation();

    const moveBack = () => {
        navigation.goBack();
    }
    const openStorage =()=>{
        navigation.navigate('ChatRoomOptionScreen')
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor={theme.colors.secondary}
                onPress={moveBack}
                style={styles.button}
            >
            <Ionicons name="ios-call" size={22} color={color} style={styles.backIcon}/>
                
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor={theme.colors.secondary}
                onPress={moveBack}
                style={styles.button}
            >
                <FontAwesome5 name="video" size={20} color={color} style={styles.backIcon}/>
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor={theme.colors.secondary}
                onPress={openStorage}
                style={styles.button}
            >
                <Ionicons name="menu-sharp" size={28} color={color} style={styles.backIcon}/>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: responsiveHeight(0.3),
    },
    button: {
        width: responsiveHeight(5.4),
        height: responsiveHeight(5.4),
        marginRight:  responsiveHeight(0.9),
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon:{
        // margin: 6,
    },
})
export default ChatRightHeader
