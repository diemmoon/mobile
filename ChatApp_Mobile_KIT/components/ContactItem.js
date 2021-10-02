import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import BubbleAvatar from './BubbleAvatar'

const ContactItem = ({ contact }) => {

    // lay sdt tu contact tim user tren api
    const anotherUser = {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://nguoinoitieng.tv/images/nnt/100/0/beoj.jpg',
        status: true
    }

    return (
        <View style={styles.container} >
            <Avatar.Image
                size={40}
            >{contact.avatarText}</Avatar.Image>
            <View style={styles.infoWrapper}>
                <Text style={styles.userName}>{contact.name}</Text>
                <Text style={styles.userNumbers}>{contact.phoneNumber}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: 'center'
    },
    infoWrapper: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 20
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    userNumbers: {

    }
})

export default ContactItem
