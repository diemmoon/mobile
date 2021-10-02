import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ChatItem from './ChatItem'


const ListChatRooms = () => {
  const conversations = useSelector(state => state.conversations.data);
  // console.log('ListChatrooms da lay dc danh sach chats: ', conversations);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={conversations}
        renderItem={({ item }) =>
          <ChatItem chatRoom={item} />
        }
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default ListChatRooms
