import { useSelector } from 'react-redux'
import {getDataAPI} from '../../api'
import {GLOBALTYPES } from './../actionType'

//  LOGIN
export const getConversationsByUserId = (userId,token) => async dispatch => {
    try {
        const res = await getDataAPI(`conversations/${userId}`, token)
        dispatch({ 
            type: GLOBALTYPES.GET_CONVERSATIONS_SUCCESS, 
            payload: { 
                data: res.data
            } 
        })
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}