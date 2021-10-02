import {GLOBALTYPES } from '../actionType'

//  LOGIN
export const postCurrentConversation = (conversation) => async dispatch => {
    try {
        dispatch({ 
            type: GLOBALTYPES.POST_CURRENT_CONVERSATION_SUCCESS, 
            payload: { 
                data: conversation
            } 
        })
       
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err
            } 
        })
    }
}