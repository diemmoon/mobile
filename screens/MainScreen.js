import React from 'react'
import { View, Text, StyleSheet, LogBox } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListChatRooms from '../components/ListChatRooms'
import HeaderSearchBar from '../components/HeaderSearchBar'
import { useTheme } from '@react-navigation/native'

const MainScreen = () => {
    
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
    ])

    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            <HeaderSearchBar/>
            <ListChatRooms/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})


export default MainScreen
