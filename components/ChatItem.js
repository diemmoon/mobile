import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from 'react-redux';
import { postCurrentConversation } from '../redux/actions/currentConversation';
import { getMessagesByConversationId } from '../redux/actions/messagesAction';
import BubbleAvatar from './BubbleAvatar';

const ChatItem = ({ chatRoom }) => {

    const navigation = useNavigation();
    const theme = useTheme();
    const dispatch = useDispatch();

    const { user, token } = useSelector(state => state.auth)

    const otherUser = chatRoom.member.find(itemUser => itemUser._id != user._id);
    // const [otherUserProfilePicture, setOtherUserProfilePicture] = useState(initialState)
    const otherUserProfilePicture = 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    if (otherUser !== undefined && otherUser.profilePicture !== '')
        otherUserProfilePicture = otherUser.profilePicture;

    const openChatRoom = () => {
        dispatch(getMessagesByConversationId(chatRoom._id, token))

        dispatch(postCurrentConversation(chatRoom))
        navigation.navigate('ChatScreen')
    }

    return (
        <TouchableHighlight
            underlayColor={theme.dark ? "#333" : '#e6e6e6'}
            onPress={openChatRoom}
        >
            <View style={styles.container}>
                <BubbleAvatar user={otherUser} />
                <View style={styles.chatContent}>
                    <PaperText style={[styles.userName]}>
                        {otherUser.username}
                    </PaperText>
                    <View style={styles.messageWrapper}>
                        <PaperText style={[styles.lastMessage]}>
                            {/* {chatRoom.lastMessage.content} */}
                            Chưa lấy tin nhắn cuối cùng
                        </PaperText>
                        <PaperText style={[styles.dotSpace, styles.text]}>.</PaperText>
                        <PaperText style={[styles.createdAt, styles.text]}>
                            {/* {moment(chatRoom.lastMessage.createdAt).format('HH:mm')} */}
                            cap nhat
                        </PaperText>
                    </View>
                </View>
                <View style={styles.seenWrapper}>
                    <Image
                        source={{
                            uri: '' + otherUserProfilePicture,
                        }}
                        style={styles.seenIcon}
                    />
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // marginHorizontal: responsiveHeight(1.2),
        padding: 9
    },
    chatContent: {
        flex: 1,
        marginHorizontal: responsiveHeight(1),
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName: {
        marginVertical: responsiveHeight(0.5),
        fontSize: responsiveFontSize(2),
        fontWeight: '700'
    },
    messageWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    lastMessage: {
        fontSize: responsiveFontSize(1.7),
    },
    dotSpace: {

    },
    createdAt: {
        fontSize: responsiveFontSize(1.6),
        marginLeft: 9
    },
    seenWrapper: {
        justifyContent: 'flex-end'
    },
    seenIcon: {
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 10,
    }
})
export default ChatItem
