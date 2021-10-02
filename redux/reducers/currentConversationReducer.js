import { GLOBALTYPES } from './../actionType'

const initialState = {}

const currentConversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.POST_CURRENT_CONVERSATION_SUCCESS:
            return action.payload
        default:
            return state;
    }
}


export default currentConversationsReducer