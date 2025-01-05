import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface InformProps {
    chatName : string
    connectedUserName : string
}

function ChatInform({chatName, connectedUserName} : InformProps) {
    const navigation = useNavigation();

    return (
        <View
            style={st.informArea}
        >
            <TouchableOpacity
                style={st.leftRightButton}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text 
                    style={st.optionText}
                >
                    Go Back</Text>
            </TouchableOpacity>
            
            <View
                style={st.chatNameText}
            >
                <Text
                    style={st.titleText}
                >
                    {chatName}
                </Text>
            </View>

            <TouchableOpacity
                style={st.leftRightButton}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text
                    style={st.optionText}
                >
                    Menu
                </Text>
            </TouchableOpacity>
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
    optionText: {
        color: "#ffffff"
    },
    titleText: {
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold",
    },
    leftRightButton: {
        display: "flex",
        width: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    chatNameText: {
        display: "flex",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ChatInform