import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'convex/react';
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';
import { api } from '../../convex/_generated/api';

function SignUpScreen() {
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [flag, setFlag] = useState<boolean>(true);

    const checkId = useMutation(api.login.isValidId);
    const signUp = useMutation(api.login.signUp);

    const navigation = useNavigation();

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
                    SIGN
                </Text>
                <Text
                    style={st.titleTextBottom}
                >
                    UP
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
                    secureTextEntry={true}
                />
            </View>
        
            <TouchableOpacity
                style={st.loginButton}
                onPress={async () => {
                    const isValid = await checkId({userId : id});

                    if (isValid) {
                        await signUp({userId: id, userPw: pw})
                        navigation.navigate('Login' as never);
                    }
                    else {
                        setFlag(false);
                    }
                }}
            >
                    <Text
                        style={st.buttonText}
                    >
                        SIGN UP
                    </Text>
            </TouchableOpacity>
        
            {  !flag && 
                <View
                    style={st.warningArea}
                >
                    <Text
                        style={st.warningText}
                    >
                        겹치는 ID이거나 빈 문자열입니다.
                        다시 확인해주세요.
                    </Text>
                </View>
            }
        
                <Text
                    style={st.signUpText}
                    onPress={() => {
                        navigation.navigate('Login' as never);
                    }}
                >
                    로그인 화면으로 돌아가기
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
    },
    warningArea : {
        padding: 10,
        borderWidth: 1,
        borderColor: "#FF1212",
        borderRadius: 10,
        backgroundColor: "#F73333"
    },
    warningText : {
        color: "#ffffff",
        fontSize: 10
    }
});

export default SignUpScreen;