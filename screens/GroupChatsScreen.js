import React from 'react'
import { View, Text, StyleSheet, LogBox } from 'react-native'

const GroupChatsScreen = () => {
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
    ])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LISt group chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default GroupChatsScreen
