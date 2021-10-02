import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { responsiveScreenFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const HeaderSearchBar = () => {
    const theme = useTheme();
    return (
        <View style={[
            styles.searchBar,
            theme.dark ? styles.darkBackground : styles.lightBackground,
        ]}>
            <View >
                <FontAwesome name="search" size={responsiveScreenFontSize(2.2)} color="black" style={styles.searchIcon} />
            </View>
            <TextInput
                style={[
                    styles.searchInput,
                    theme.dark ? styles.darkBackground : styles.lightBackground,
                ]}
                placeholder='Tìm kiếm'
                placeholderTextColor='#909297'
                underlineColor='transparent'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: '#3a3b3c',
    },
    lightBackground: {
        backgroundColor: '#e6e6e6',
    },
    searchBar: {
        borderRadius: responsiveHeight(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        marginVertical: responsiveHeight(1.5),
        marginHorizontal: responsiveHeight(1.8),
    },
    searchIcon: {
        color: '#909297'
    },
    searchInput: {
        flex: 1,
        height: responsiveHeight(5),
        marginLeft: 10,
        padding: 0,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '600',
        color: '#fff',
    }
})

export default HeaderSearchBar
