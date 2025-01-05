import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface InformProps {
    chatName : string
    connectedUserName : string
}

function ChatInform({chatName, connectedUserName} : InformProps) {
  return (
    <View
        style={st.informArea}
    >
        <View>
            
        </View>

        <Text
            style={st.chatNameText}
        >
            {chatName}
        </Text>

        <View>
            
        </View>
    </View>
  )
}

const st = StyleSheet.create({
    informArea: {
        display: "flex",
        flexDirection: "row",
        height: "7%",
        backgroundColor: "#191B43",
        boxShadow: "10px"
    },
    chatNameText: {
        display: "flex",
        width: "80%",
        justifyContent: "center",
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default ChatInform