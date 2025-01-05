import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useRef } from 'react'
import InputArea from '../../components/chat/InputArea'
import ChatInform from '../../components/chat/ChatInform'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import ChatBox from '../../components/chat/ChatBox'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../modules/redux/RootReducer'

function ChatScreen() {
    const messages = useQuery(api.chat.getMessages);
    const scrollViewRef = useRef<ScrollView>(null);

    const dispatch = useDispatch();

    const userInfo = useSelector((state: RootState) => state.template);
    
    return (
        <SafeAreaView style={st.container}>
            <ChatInform
                chatName='Test Chat'
                connectedUserName={userInfo.userId}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef?.current?.scrollToEnd({ animated: true })}
            >
                {messages?.map(
                    (message) => <ChatBox
                        name={message.user}
                        message={message.body}
                        direction={message.user === userInfo.userId ? 'right' : 'left'}
                        key={message._id}
                    />
                )}
            </ScrollView>
            <InputArea/>
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      backgroundColor: "#242762"
    }
  });

export default ChatScreen;