import { StatusBar } from 'expo-status-bar'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginForm from './screens/LoginForm/index'
import Catalog from './screens/Catalog'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Login' component={LoginForm} />
          <Stack.Screen name='Catalog' component={Catalog} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})
