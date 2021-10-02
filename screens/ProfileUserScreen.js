import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme';

const myTheme = theme;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileUserScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.userInfoSection}>
                    <View style={styles.user}>
                        <Avatar.Image
                            source={{
                                uri: 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                            }}
                            size={150}
                        />
                    </View>
                    <View>
                        <Title style={styles.title}>User</Title>
                        <Caption style={styles.caption}>@User</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Icon name="calendar" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>dd/mm/yyyy</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>Hồ Chí Minh</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}> 0123456789</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color={myTheme.colors.primary} size={20} />
                    <Text style={styles.textLocation}>user@gmail.com</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <Caption style={styles.caption}>
                        <Icon
                            name="account-outline"
                            color={myTheme.colors.primary}
                            size={20} /> Bạn bè </Caption>
                    <Title>0</Title>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { navigation.navigate("ProfileSettingScreen") }}>
                    <View style={styles.menuItem}>
                        <MaterialIcons name="settings" size={25} color={myTheme.colors.settingText} />
                        <Text style={styles.menuItemText}>Thay đổi thông tin cá nhân</Text>
                    </View>
                </TouchableRipple>

                {/* <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="key-variant" color={myTheme.colors.settingText} size={25} />
                        <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                    </View>
                </TouchableRipple> */}

            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        flexDirection: 'column',
    },
    userInfoSection: {
        marginVertical: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },

    user: {
        marginBottom: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    textLocation: {
        // color: '#777',
        marginLeft: 20,
    },

    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'column',
        height: windowHeight * 12 / 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuWrapper: {
        marginTop: 10,
    },

    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        // paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },

})
