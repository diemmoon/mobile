import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainTab from './MainTab';
import ProfileUserScreen from './ProfileUserScreen';
import AccountSettingScreen from './AccountSettingScreen'
import ProfileSettingScreen from './ContactScreen';
import ContactScreen from './ProfileSettingScreen';
import ChatScreen from './ChatScreen';
import ChatLeftHeader from '../components/ChatScreenHeader/ChatLeftHeader'
import ChatRightHeader from '../components/ChatScreenHeader/ChatRightHeader';
import ChatRoomOptionScreen from './ChatRoomOptionScreen';
import MediaTab from './MediaTab';
import MoreScreen from './MoreScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const RootNavigation = () => {
    return (
        // <Drawer.Navigator
        //     initialRouteName={accessToken !== null ? "Dashboard" : "LoginScreen"}
        //     screenOptions={{
        //         headerShown: false,
        //     }}
        //     drawerContent={(props) => <CustomDrawerMenu  {...props} />}
        // >

        //     {/* <Drawer.Screen name="StartScreen" component={StartScreen} /> */}

        //     <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        //     <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        //     <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        //     <Drawer.Screen name="Dashboard" component={Dashboard} />
        //     <Drawer.Screen name="MessageScreen" component={MessageScreen} />
        //     <Drawer.Screen name="ProfileUserScreen" component={ProfileUserScreen} />
        //     <Drawer.Screen name="EditProfileUserScreen" component={EditProfileUserScreen} />

        // </Drawer.Navigator>
        <Stack.Navigator initialRouteName='MainTab'

        >

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        headerShown: false
                    })
                }
                name='MainTab'
                component={MainTab}


            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        title: 'Thông tin cá nhân'
                    })
                }
                name='ProfileUserScreen'
                component={ProfileUserScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        title: 'Cài đặt tài khoản'
                    })
                }
                name='AccountSettingScreen'
                component={AccountSettingScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        title: 'Thay đổi thông tin cá nhân'
                    })
                }
                name='ProfileSettingScreen'
                component={ProfileSettingScreen}
            />

            <Stack.Screen
                options={() => ({
                    // title: route.params.chatRoom.users[1].name,
                    title: 'dang cap nhan phan nay',
                    headerTitleStyle: {
                        fontWeight: '600',
                        // color: '#fff',
                    },
                    headerStyle: {
                        // backgroundColor: '#000'
                    },
                    // headerLeft: () => <ChatLeftHeader otherUser={route.params.chatRoom.users[1]} />,
                    // headerLeftContainerStyle: {
                    //     backgroundColor: 'transparent'
                    // },
                    // headerRight: () => <ChatRightHeader chatRoomID={route.params.chatRoom.id} />,
                    // headerRightContainerStyle: {
                    //     backgroundColor: 'transparent'
                    // },
                })}
                name='ChatScreen'
                component={ChatScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        title: 'Tùy chọn'
                    })
                }
                name='ChatRoomOptionScreen'
                component={ChatRoomOptionScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        title: 'Kho lưu trữ'
                    })
                }
                name='MediaTab'
                component={MediaTab}
            />
            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        headerShown: false
                    })
                }
                name='LoginScreen'
                component={LoginScreen}
            />

            <Stack.Screen
                options={
                    ({ navigation }) => ({
                        headerShown: false
                    })
                }
                name='RegisterScreen'
                component={RegisterScreen}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation
