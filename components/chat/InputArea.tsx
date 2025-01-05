import { useMutation } from 'convex/react';
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { api } from '../../convex/_generated/api';

function InputArea() {
    const sendMessage = useMutation(api.chat.sendMessage);
    const [newInput, setNewInput] = useState('');

    return (
        <View style={st.areaContainer}>
            <TextInput
                style={st.textInput}
                value={newInput}
                onChangeText={(e : string) => setNewInput(e)}
                placeholder='Write Your Message Here...'
            />
            <TouchableOpacity
                style={st.sendButton}
                onPress={async (e) => {
                    await sendMessage({ user: "test", body: newInput });
                    setNewInput("");
                }}
            >
                <Text 
                    style={st.buttonText}
                >
                    SEND
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const st = StyleSheet.create({
    areaContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        gap: 5,
        borderTopWidth: 0.7, 
        borderTopColor: "#585C9E"
    },
    textInput: {
        width: "90%",
        paddingLeft: 10,
        backgroundColor: "#d9d9d9",
        borderRadius: 10
    },
    sendButton: {
        display: "flex",
        width: "10%",
        justifyContent: "center",
        backgroundColor: "#333DF7",
        borderRadius: 10,
    },
    buttonText: {
        width: "100%",
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default InputArea;