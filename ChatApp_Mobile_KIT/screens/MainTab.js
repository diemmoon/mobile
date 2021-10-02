import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import {
    Ionicons,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import ContactScreen from './ContactScreen';
import MainScreen from './MainScreen';
import GroupChatsScreen from './GroupChatsScreen';
import MoreScreen from './MoreScreen';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
// import { AuthContext } from '../context/Context';
import MessageIconNofication from '../components/TabBarIconNofication/MessageIconNofication';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const MainTab = () => {


    const { user } = useSelector(state => state.auth);

    // let profilePicture = 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    // if (user !== undefined && user.profilePicture !== '')
    //     profilePicture = user.profilePicture;

    // hàm set sẽ làm thay đổi gái trị nofication của message
    const [myNofi, setMyNofi] = React.useState(3); //test so 3

    const iconSize = 23;
    const tabBarHeight = responsiveHeight(7);

    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIndicator: () => null,
                tabBarStyle: {
                    marginVertical: 0,
                    paddingTop: 5,
                    height: tabBarHeight,
                },
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIconStyle: styles.tabBarIcon,
                headerStyle: {

                },

            })}
        >
            <Tab.Screen
                options={{
                    title: 'Tin nhắn',
                    tabBarIcon: ({ color: color }) => {
                        if (myNofi <= 0)
                            return <Ionicons name="chatbubble" size={iconSize} color={color} />
                        return <MessageIconNofication iconSize={iconSize} color={color} num={myNofi} />
                    },
                    headerLeft: () => {
                        return (
                            <TouchableHighlight
                                underlayColor=" #cccccc"
                                onPress={() => {
                                    navigation.navigate('ProfileUserScreen');
                                }}
                            >
                                <Image
                                    source={{
                                        uri: user.profilePicture !== null ? user.profilePicture : 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                                    }}
                                    style={{
                                        width: responsiveHeight(4.5),
                                        height: responsiveHeight(4.5),
                                        borderRadius: responsiveHeight(5),
                                        borderColor: '#ccc',
                                        borderWidth: 1
                                    }}
                                />
                            </TouchableHighlight>
                        )
                    },
                    headerLeftContainerStyle: {
                        marginLeft: responsiveHeight(2),
                    },
                }}
                name="Chat"
                component={MainScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Danh bạ',
                    tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="contacts" size={iconSize} color={color} />,
                }}
                name="Contacts"
                component={ContactScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Nhóm',
                    tabBarIcon: ({ color: color }) => <MaterialCommunityIcons name="account-group" size={iconSize + 5} color={color} />,
                }}
                name="Group"
                component={GroupChatsScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Thêm',
                    tabBarIcon: ({ color: color }) => <Ionicons name="md-grid" size={iconSize} color={color} />,
                }}
                name="More"
                component={MoreScreen}
            />


        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarLabel: {
        textTransform: 'capitalize',
        margin: 3,
        fontSize: responsiveFontSize(1.6),
    },
    tabBarIcon: {
        width: 'auto',
        padding: 0,
        marginTop: 4,
    },
});
export default MainTab
