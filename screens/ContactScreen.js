import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Platform, PermissionsAndroid, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactItem from '../components/ContactItem';

const ContactScreen = () => {
    const [contacts, setContacts] = useState([{
        name: '',
        phoneNumber: '',
        avatarText: '',
    }]);
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data.map((item) => {
                        return {
                            name: item.name,
                            phoneNumber: item.phoneNumbers[0].number ?? 'Lỗi khi đọc',
                            avatarText: item.name.charAt(0)?.toUpperCase(),
                        };
                    }))
                }

            }
            else {
                console.log('Chua dc cap quyen contacts');
                if (Platform.OS === 'android') {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: "Cool Photo App Camera Permission",
                            message:
                                "Cool Photo App needs access to your camera " +
                                "so you can take awesome pictures.",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                    );
                }
            }
        })();
    }, []);

    return (
        <View style={{
            backgroundColor: '#fff'
        }}>
            <FlatList
                data={contacts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ContactItem contact={item} />
                )}
            />
        </View>
    );
}

export default ContactScreen
