import { loginDataAPI, postDataAPI } from '../../api'
import { GLOBALTYPES } from './../actionType'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

//  LOGIN
export const login = (data) => async dispatch => {
    try {

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        })

        const res = await postDataAPI('auth/login', data);

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        if (res.data !== null) {
            await AsyncStorage.setItem('AccessToken', res.data.accessToken)
            await AsyncStorage.setItem('User', JSON.stringify(res.data.user))
        }

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: false }
        })

    } catch (err) {
        console.log(err)
    }

}

export const refreshToken = () => async (dispatch) => {
    const firstLogin = await AsyncStorage.getItem("User")
    if (firstLogin) {
        // dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        try {
            const res = await postDataAPI('auth/refresh_token')
            dispatch({
                type: GLOBALTYPES.AUTH,
                payload: {
                    token: res.data.accessToken,
                    user: res.data.user
                }
            })

            // dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: err.response.data.msg
                }
            })
        }
    }
}

export const logout = () => async (dispatch) => {

    try {
        await AsyncStorage.removeItem('AccessToken')
        await AsyncStorage.removeItem('User')
        await postDataAPI('auth/logout')

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }

}

export const retrieveAuth = (user, token) => async (dispatch) => {
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            token: token,
            user: user
        }
    })
}