import React from 'react'
import { Button, Text, View } from 'react-native';

function HomeScreen({navigation} : any) {
  return (
    <View>
        <Text>Home Screen</Text>
        <Button
          title="Chat 열기"
          onPress={() => navigation.navigate('Chat')}
        />
    </View>
  )
}

export default HomeScreen;