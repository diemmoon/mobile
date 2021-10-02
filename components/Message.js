import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useSelector } from 'react-redux';

const Message = ({ message, index, idRoom }) => {

    const theme = useTheme();
    const messages = useSelector(state => state.messages.data);
    const conversations = useSelector(state => state.conversations.data);
    const { token, user } = useSelector(state => state.auth);

    // TÌM TIN NHẮN TRC ĐÓ ĐỂ TẠO ĐƯỜNG LINE NGĂN CÁCH TIN NHẮN GIỮA 1 KHOẢNG T/G DÀI, SẴN TIỆN LÀM HIỆU ỨNG TIN NHẮN NẾU CẦN
    // lay tin nhan trc do
    // dung api lay message nằm trc, dùng biến index (đã dc truyền bên ChatScreen)
    // const messageBefore =
    //     Chats.find((item) => {
    //         return idRoom == item.id;
    //     })?.messages[index - 1];

    // const isSameMessOFUserBefore = messageBefore?.user.id === message.user.id;

    // lay tin nhan sau
    // dung api lay message nằm sau, dùng biến index (đã dc truyền bên ChatScreen)
    // const messageAfter =
    //     Chats.find((item) => {
    //         return idRoom == item.id;
    //     })?.messages[index + 1];
    // const isSameMessOFUserAfter = messageAfter?.user.id === message.user.id;

    // xac dinh room > 2user ?
    const userCount = conversations.length;
    const isMultiUser = userCount > 2;

    // ko can quan tam ==============================================================================
    // xac dinh vi tri message
    // const isHeader = !isSameMessOFUserBefore && isSameMessOFUserAfter;
    // const isCenter = isSameMessOFUserAfter && isSameMessOFUserBefore && messageAfter && messageBefore;
    // const isFooter = isSameMessOFUserBefore;
    // ===============================================================================================

    const isMyMessage = message.sender._id === user._id;

    // const userImgUri = Users.find((user) => {
    //     return user.id == message.user.id;
    // }).imageUri;
    const userImgUri = message.sender.profilePicture === '' ? 'data:image/jpeg;base64,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'
        : message.sender.profilePicture;

    const userName = 'update user';

    if (isMyMessage) {
        return (
            <View
                style={[
                    isMyMessage ? styles.myContainer : styles.container,
                    { marginBottom: 5 }
                ]}
            >

                <View style={styles.messageWrapper}>
                    <Text style={[
                        styles.message,
                        styles.myMessage,
                        theme.dark ? styles.myDarkMessage : styles.myLightMessage
                    ]}>
                        {message.text}
                    </Text>
                </View>
                {/* {!messageAfter ? //them dieu kien da seen
                    <Image source={{ uri: '' + userImgUri }} style={styles.smallAvatar} /> :
                    <View style={styles.smallAvatar} />
                } */}
                <View style={styles.smallAvatar} />
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { marginBottom: 5 }]}>
                <Image source={{ uri: '' + userImgUri }} style={styles.avatar} />
                <View style={styles.messageWrapper}>

                    {/* {isMultiUser && <PaperText>{userName}</PaperText> } */}

                    <Text style={[
                        styles.message,
                        theme.dark ? styles.darkMessage : styles.lightMessage
                    ]}>
                        {message.text}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        margin: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
    },
    myContainer: {
        maxWidth: '100%',
        margin: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    messageWrapper: {
        maxWidth: '70%',
    },
    message: {
        // maxWidth: '70%',
        backgroundColor: '#3a3b3c',
        color: '#fff',
        padding: 8,
        borderRadius: 20,
        paddingHorizontal: 18,
        fontSize: responsiveFontSize(1.7),
    },
    myLightMessage: {
        backgroundColor: '#64868E',
        color: '#fff'
    },
    myDarkMessage: {
        backgroundColor: '#64868E',
        color: '#fff',
    },
    lightMessage: {
        backgroundColor: '#e6e6e6',
        color: '#000',
    },
    darkMessage: {
        backgroundColor: '#3a3b3c',
        color: '#fff',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    },
    smallAvatar: {
        width: 15,
        height: 15,
        borderRadius: 50,
        marginHorizontal: 3,
    },
    messageHeader: {
        borderBottomLeftRadius: 5,
    },
    messageCenter: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    messageFooter: {
        borderTopLeftRadius: 5,
    },
    myMessageHeader: {
        borderBottomRightRadius: 5,
    },
    myMessageCenter: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    myMessageFooter: {
        borderTopRightRadius: 5,
    },
})
export default Message
