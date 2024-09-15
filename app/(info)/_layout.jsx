import { View, Text } from 'react-native'
import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const infoLayout  = () => {
  return (
    <>
    <Stack>
      <Stack.Screen
      name ="fantailScreen"
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen
      name = "keaScreen"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name = "kereruScreen"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name = "pukekoScreen"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name = "tuiScreen"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name = "takaheScreen"
      options={{
        headerShown: false
      }}
      />
    </Stack>

    <StatusBar backgroundColor = "bg-primary"/>
    </>
  )
}

export default infoLayout 