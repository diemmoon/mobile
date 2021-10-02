import { GLOBALTYPES } from './../actionType'

const initialState = {}

const conversationsReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.GET_CONVERSATIONS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}


export default conversationsReducer