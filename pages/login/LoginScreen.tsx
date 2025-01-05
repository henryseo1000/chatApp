import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';

function LoginScreen() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        <SafeAreaView
            style={st.loginContainer}
        >
            <View
                style={st.titleArea}
            >
                <Text
                    style={st.titleTextTop}
                >
                    TEST
                </Text>
                <Text
                    style={st.titleTextBottom}
                >
                    CHAT
                </Text>
            </View>

            <View
                style={st.inputArea}
            >
                <TextInput
                    style={st.textInput}
                    value={id}
                    placeholder='Type Your ID Here'
                    onChangeText={(e) => setId(e)}
                />

                <TextInput
                    style={st.textInput}
                    value={pw}
                    placeholder='Type Your PW Here'
                    onChangeText={(e) => setPw(e)}
                />
            </View>

            <TouchableOpacity
                style={st.loginButton}
                onPress={() => {
                    
                }}
            >
                <Text
                    style={st.buttonText}
                >
                    LOGIN
                </Text>
            </TouchableOpacity>

            <Text
                style={st.signUpText}
            >
                SIGN UP
            </Text>
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    loginContainer: {
      display: "flex",
      height: "100%",
      gap: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242762"
    },
    titleArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    titleTextTop: {
        color: "#ffffff",
        fontSize: 70,
        fontWeight: "bold"
    },
    titleTextBottom: {
        color: "#ffffff",
        fontSize: 40,
    },
    loginButton: {
        display: "flex",
        height: 40,
        width: "50%",
        justifyContent: "center",
        backgroundColor: "#333DF7",
        borderRadius: 10,
    },
    buttonText: {
        width: "100%",
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    },
    inputArea: {
        width: "100%",
        gap: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "50%",
        height: 40,
        paddingLeft: 10,
        backgroundColor: "#d9d9d9",
        borderRadius: 10
    },
    signUpText: {
        color: "#585C9E",
        textDecorationLine: "underline"
    }
});

export default LoginScreen;