import { useRoute } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Text as PaperText } from 'react-native-paper'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ChatInput from '../components/ChatInput'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getMessagesByConversationId } from '../redux/actions/messagesAction'

const ChatScreen = () => {

    const [page, setPage] = useState(0)
    const { user, token } = useSelector(state => state.auth)
    const messages = useSelector(state => state.messages.data);
    const conversation = useSelector(state => state.currentConversationsReducer.data);
    const dispatch = useDispatch()

    useEffect(() => {
        if (conversation)
            dispatch(getMessagesByConversationId(conversation._id, token, 2))
    }, [dispatch, token, conversation, page])

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.messagesComponent}
            >
                {2 <= 0 ? //messages.member.length
                    <View
                        style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
                    >
                        <PaperText>Bạn chưa có tin nhắn với người này</PaperText>
                    </View> :
                    <FlatList
                        inverted //auto nằm cuối danh sách?
                        data={messages.reverse()}
                        renderItem={({ item }) => (
                            <Message
                                message={item}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }

                <View style={{ flex: 10000 }}></View>
            </View>
            <ChatInput conversationId={conversation._id} user={user} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    messagesComponent: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    }
})
export default ChatScreen
