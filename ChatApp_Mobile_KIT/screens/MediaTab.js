import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupChatsScreen from './GroupChatsScreen';
import ImageMediaScreen from './ChatMediaScreen/ImageMediaScreen';
import FileMediaScreen from './ChatMediaScreen/FileMediaScreen';
import LinkeMediaScreen from './ChatMediaScreen/LinkeMediaScreen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MediaTab = () => {

    // const navigation = useNavigation();

    const Tab = createMaterialTopTabNavigator();
    // const Tab = createBottomTabNavigator();
    const optionTabBar = {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '700'
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    title: 'Ảnh/Video',
                    tabBarLabelStyle: {...optionTabBar}
                }}
                name="ImageMediaScreen"
                component={ImageMediaScreen}
            />
            <Tab.Screen
                name="FileMediaScreen"
                options={{
                    title: 'File',
                    tabBarLabelStyle: {...optionTabBar}
                }}
                component={FileMediaScreen}
            />
            <Tab.Screen
                name="LinkeMediaScreen"
                options={{
                    title: 'Link',
                    tabBarLabelStyle: {...optionTabBar}
                }}
                component={LinkeMediaScreen}
            />
        </Tab.Navigator>
    )
}

export default MediaTab
