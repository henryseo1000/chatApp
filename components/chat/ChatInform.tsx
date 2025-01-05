import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

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
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>

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