import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Dialog, Drawer, Paragraph, Portal, RadioButton, Text as PaperText } from 'react-native-paper';
import { Avatar, Title } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation, useRoute } from '@react-navigation/core';
import { DrawerItem } from '@react-navigation/drawer';
import {
    Feather,
    AntDesign,
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const ChatRoomOptionScreen = () => {

    const navigation = useNavigation();

    const route = useRoute();
    const otherUser = {
        userName: 'Other User'
    }

    const optionIconSize = 18;
    const optionIconColor = '#000'
    const findMessageIcon = <AntDesign name="search1" size={optionIconSize} color={optionIconColor} />;
    const userProfileIcon = <FontAwesome name="user-o" size={optionIconSize} color={optionIconColor} />;
    const nofiIcon = <Feather name="bell" size={optionIconSize} color={optionIconColor} />;
    const offNofiIcon = <Feather name="bell-off" size={optionIconSize} color={optionIconColor} />;

    const [isDialogVisible, setIsDialogVisible] = React.useState(false);
    const hideDialog = () => setIsDialogVisible(false);
    const [valueTurnOffNofication, setValueTurnOffNofication] = React.useState('');

    const findMessage = () => {
        console.log('option find message');
    }
    const otherUserProfile = () => {
        console.log('option otherUserProfile');
    }
    const turnOffNofi = () => {
        if (valueTurnOffNofication === '') {
            setIsDialogVisible(true);
        }
    }
    const turOnNofi = () => {
        setIsDialogVisible(false);
        setValueTurnOffNofication('')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.seperateWrapper}>
                    <View style={styles.userInfo}>
                        <Avatar.Image
                            source={{
                                uri: 'https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                            }}
                            size={80}
                        />
                        <Title style={styles.userName}>{otherUser.userName}</Title>
                    </View>
                    <View style={styles.quickOptions}>
                        {QuickOptionItem(
                            findMessage,
                            findMessageIcon,
                            'Tìm kiếm tin nhắn'
                        )}
                        {QuickOptionItem(
                            otherUserProfile,
                            userProfileIcon,
                            'Trang cá nhân'
                        )}
                        {QuickOptionItem(
                            valueTurnOffNofication == '' ? turnOffNofi : turOnNofi,
                            valueTurnOffNofication == '' ? nofiIcon : offNofiIcon,
                            'Tắt thông báo'
                        )}
                    </View>
                </View>
                <View style={styles.seperateWrapper}>

                    <Drawer.Section title='Media'>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome name="folder-open-o" size={size} color={color} />
                            )}
                            label='Kho lưu trữ'
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { navigation.navigate('MediaTab', { screen: 'FileMediaScreen' }) }}
                        />

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="attach-file" size={size} color={color} />
                            )}
                            label='File chia sẻ'
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntDesign name="link" size={size} color={color} />
                            )}
                            label='Link chia sẻ'
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { }}
                        /> */}

                    </Drawer.Section>

                    <Drawer.Section title='Group' >

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="account-group" size={size} color={color} />
                            )}
                            label={`Tạo nhóm với ${otherUser.userName}`}
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="group-add" size={size} color={color} />
                            )}
                            label={`Thêm ${otherUser.userName} vào nhóm`}
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { }}
                        />

                    </Drawer.Section>

                    <Drawer.Section title='Quyền riêng tư' >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="block" size={size} color={color} />
                            )}
                            label={`Chặn ${otherUser.userName}`}
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                            onPress={() => { }}
                        />
                    </Drawer.Section>

                    {/* dialog choose time turn off nofication */}
                    <Portal>
                        <Dialog visible={isDialogVisible} onDismiss={hideDialog}>
                            <Dialog.Content >
                                <Paragraph style={styles.dialogCheckBoxTitle}>Tắt thông báo trò chuyện?</Paragraph>
                                <RadioButton.Group onValueChange={newValue => setValueTurnOffNofication(newValue)} value={valueTurnOffNofication}>
                                    <RadioButton.Item label="Second item" value="second" style={styles.dialogCheckBox} />
                                    <RadioButton.Item label="First item" value="first" style={styles.dialogCheckBox} />
                                </RadioButton.Group>
                            </Dialog.Content>
                        </Dialog>
                    </Portal>

                </View>
            </View>
        </ScrollView>
    )
}

const QuickOptionItem = (actionFunction, optionIcon, label) => {
    const theme = useTheme()
    return (
        <TouchableHighlight
            onPress={actionFunction}
            underlayColor={theme.dark ? "#3d3c3e" : '#f2f2f2'}
            style={styles.optionItemContainer}
        >
            <View style={styles.optionItem}>
                <View style={styles.iconWrapper}>
                    {optionIcon}
                </View>
                <PaperText
                    style={styles.optionLabel}
                    numberOfLines={2}
                >
                    {label}
                </PaperText>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        // backgroundColor: '#ccc'
    },
    seperateWrapper: {
        marginBottom: 6,
        paddingVertical: 6,
    },
    userInfo: {
        marginVertical: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    userName: {
        marginTop: 10
    },
    quickOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    optionItemContainer: {
        width: 80,
        paddingVertical: 10,
    },
    optionItem: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    iconWrapper: {
        width: 37,
        height: 37,
        borderRadius: 37,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionLabel: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: responsiveFontSize(1.7)
    },
    drawerItem: {
        marginHorizontal: 20,
    },
    drawerItemLabel: {
        fontSize: responsiveFontSize(2),
    },
    dialogCheckBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    dialogCheckBoxTitle: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '700',
        paddingBottom: 30,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.2
    },
})

export default ChatRoomOptionScreen;