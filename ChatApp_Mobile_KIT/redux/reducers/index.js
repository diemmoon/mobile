import { combineReducers } from 'redux'
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import showMenuReducer from './showmenuReducer'
import themeReducer from './themeReducer'
import conversationsReducer from './conversationsReducer'
import messagesReducer from './messagesReducer'
import currentConversationReducer from './currentConversationReducer'
import socketReducer from './socketReducer'
const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    showMenu: showMenuReducer,
    theme: themeReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    currentConversationsReducer: currentConversationReducer,
    // theme: themeRe
    // user:userReducer,
    // modal:modalReducer,
    socket: socketReducer,
})
export default rootReducer