import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Caption, Drawer, Switch, Title, TouchableRipple, useTheme, Text as PaperText } from 'react-native-paper'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/actions/themeAction';
import { logout } from '../redux/actions/authAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MoreScreen = (props) => {

    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.theme);

    const navigation = useNavigation();
    const theme = useTheme();

    return (
        <View style={styles.container} {...props}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>


                    <View style={styles.userInfoSection}>

                        <View style={styles.user}  >
                            <Avatar.Image source={{
                                uri: 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                            }}
                                size={50} />
                            <View style={styles.userText}>
                                <Title style={styles.title} >User</Title>
                                <Caption style={styles.caption} >@User</Caption>
                            </View>
                        </View>

                    </View>


                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    color={theme.colors.primary}
                                    size={size} />
                            )}
                            label='Nhắn tin'
                            onPress={() => { navigation.navigate('Chat') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="person-circle-outline"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Trang cá nhân'
                            labelStyle={styles.drawerItemLabel}
                            onPress={() => { navigation.navigate('ProfileUserScreen') }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="settings-sharp"
                                    size={size}
                                    color={theme.colors.primary}
                                />
                            )}
                            label='Cài đặt tài khoản'
                            labelStyle={styles.drawerItemLabel}
                            onPress={() => { navigation.navigate('AccountSettingScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-group-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label='Bạn bè'
                            onPress={() => { props.navigation.navigate('') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-box-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label='Danh bạ'
                            onPress={() => { navigation.navigate('Contacts') }}
                        />

                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { dispatch(changeTheme(!isDarkTheme)); }}>
                            <View style={styles.preference}>
                                <PaperText style={styles.drawerItemLabel}>Chế độ tối</PaperText>
                                <View pointerEvents="none">
                                    <Switch value={theme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Feather
                            name="log-out"
                            color={theme.colors.error}
                            size={size}
                        />
                    )}
                    label='Đăng Xuất'
                    labelStyle={[
                        styles.drawerItemLabel,
                        { color: theme.colors.error }
                    ]}
                    onPress={() => {

                        dispatch(logout());
                        navigation.navigate('LoginScreen')

                    }}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        flexDirection: 'column'
    },

    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    user: {
        flexDirection: 'row',
        // marginTop: 15,
        alignItems: 'center'
    },

    userText: {
        flexDirection: 'column',
        marginLeft: 15
    },


    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    drawerItemLabel: {
        fontSize: responsiveFontSize(2),
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#ccc',
        borderTopWidth: 0.2,
        paddingTop: 4
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center'
    }

});
export default MoreScreen
