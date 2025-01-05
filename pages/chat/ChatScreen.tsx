import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useRef } from 'react'
import InputArea from '../../components/chat/InputArea'
import ChatInform from '../../components/chat/ChatInform'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import ChatBox from '../../components/chat/ChatBox'

function ChatScreen() {
    const messages = useQuery(api.chat.getMessages);
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {

    })
    return (
        <SafeAreaView style={st.container}>
            <ChatInform
            chatName='Test Chat'
            connectedUserName='Henry'
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
                        direction={message.user === 'test' ? 'right' : 'left'}
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