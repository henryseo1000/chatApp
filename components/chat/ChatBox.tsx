import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

interface ChatInfo {
    name : string,
    photo? : string,
    message : string,
    direction : "left" | "right",
    time : string
}

function ChatBox({ name, photo, message, direction, time } : ChatInfo) {
  return (
    <View style={direction === 'left' ? st.boxContainerLeft : st.boxContainerRight}>
        { direction === "left" ?
            <View>
                <Image 
                    source={require('../../assets/image/defaultProfileImage.png')}
                    style={st.imageArea}
                />
            </View>
            :
            <View 
                style={st.timeArea}
            >
                <Text
                    style={st.sentTime}
                >
                    {new Date(time).toUTCString()}
                </Text>
            </View>
        }
        <View style={st.messageArea}>
            <Text 
                style={direction === 'left' ? st.nameTextLeft : st.nameTextRight}
            >
                {name}
            </Text>

            <Text
                style={direction === 'left' ? st.messageTextLeft : st.messageTextRight}
            >
                {message}
            </Text>
        </View>
        { direction === "right" ?
            <View>
                <Image
                    source={require('../../assets/image/defaultProfileImage.png')}
                    style={st.imageArea}
                />
            </View>
            :
            <View 
                style={st.timeArea}
            >
                <Text
                    style={st.sentTime}
                >
                    {new Date(time).toUTCString()}
                </Text>
            </View>
        }
    </View>
  )
}

const st = StyleSheet.create({
    boxContainerLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 10,        
        gap: 10
    },
    boxContainerRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10,        
        gap: 10
    },
    imageArea: {
        display: "flex",
        width: 40,
        height: 40,
        borderRadius: 20
    },
    messageArea: {
        display: "flex",
        gap: 7
    },
    nameTextLeft: {
        display: "flex",
        textAlign: "left",
        color: "#ffffff",
        fontWeight : "bold"
    },
    nameTextRight: {
        display: "flex",
        textAlign: "right",
        color: "#ffffff",
        fontWeight : "bold"
    },
    messageTextLeft: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#161738",
        color: "#ffffff",
        fontSize: 15,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    messageTextRight: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#D9D9D9",
        color: "#161738",
        fontSize: 15,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    timeArea: {
        display: "flex",
        justifyContent: "flex-end"
    },
    sentTime: {
        color: "#585C9E",
        fontSize: 10
    }
})

export default ChatBox;