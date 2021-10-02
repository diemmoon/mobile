import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { useSelector } from 'react-redux';

const BubbleAvatar = ({ otherUser }) => {
    const isDarkTheme = useSelector(state => state.theme)

    const otherUserProfilePicture = 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    if (otherUser != undefined && otherUser.profilePicture != '')
        otherUserProfilePicture = otherUser.profilePicture;

    return (
        <View style={styles.imageWrapper}>
            <Image
                source={{
                    uri: '' + otherUserProfilePicture,
                }}
                style={styles.userAvatar}
            />
            {/* {user.status && <View style={[styles.activeIcon, isDarkTheme? {borderColor: '#000'} : {borderColor: '#fff'}]}></View>} */}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        position: 'relative',
        marginHorizontal: 8
    },
    userAvatar: {
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: responsiveHeight(8),
    },
    activeIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        backgroundColor: '#18be12'
    },
})
export default BubbleAvatar
