import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme, NavigationContainer
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme, Provider as PaperProvider
} from 'react-native-paper';
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RootNavigation from './screens/RootNavigation';
import RootAuthenication from './screens/RootAuthenication';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken, retrieveAuth } from './redux/actions/authAction';
import { getConversationsByUserId } from './redux/actions/conversationsAction';
import { io } from 'socket.io-client';
import { GLOBALTYPES } from './redux/actionType';
import SocketClient from './SocketClient'


const Root = () => {

    const [MESS_NOFICATION_COUNT, set_MESS_NOFICATION_COUNT] = React.useState(0);

    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);


    const initLoginProps = {
        isLoading: true,
        userToken: null,
    }


    const MyDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            text: '#000',
            primary: '#64868E',
            secondary: '#98B4A6',
            background: '#ffffff',
            grayText: '#333',
            error: '#f53e2d'
        }
    }
    const MyDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            primary: '#98B4A6',
            // secondary: '#64868E',
            text: '#fff',
            grayText: '#ccc',
            error: '#f53e2d'
        }
    }

    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.theme);
    const { token, user } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(refreshToken())
        const socket = io('http://192.168.1.7:8800', { jsonp: false })
        dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
        return () => socket.close()
    }, [dispatch])

    // useEffect(() => {
    //     let userToken;
    //     userToken = null;
    //     let userStringify = null;
    //     setTimeout(async () => {
    //         try {
    //             userToken = await AsyncStorage.getItem('AccessToken');
    //             userStringify = await AsyncStorage.getItem('User');

    //             dispatch(retrieveAuth(JSON.parse(userStringify), userToken));
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }, 1000)
    // }, [dispatch, token, user])

    useEffect(() => {
        if (user) {
            try {
                dispatch(getConversationsByUserId(user._id, token));
            } catch (error) {
                console.log(error);
            }
            console.log('Root: da co user', user);
        }
        else {
            console.log('Root: user null');
        }
    }, [token, user, dispatch])

    const theme = isDarkTheme ? MyDarkTheme : MyDefaultTheme;
    const isLoading = useSelector(state => state.alert.loading);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='gray' />
            </View>
        )
    }

    return (

        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                {token && <SocketClient />}
                <StatusBar barStyle='light-content' />
                {token == null ?
                    (<RootAuthenication />) :
                    (<RootNavigation />)
                }
            </NavigationContainer>
        </PaperProvider>
    )
}

export default Root
