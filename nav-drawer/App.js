//npx expo install @react-navigation/native @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'
import SettingScreen from './components/SettingsScreen'


const Drawer = createDrawerNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={
        { 
          headerStyle: { backgroundColor: 'lightblue'},
          headerTintColor: '#fff', 
          drawerStyle: {
            backgroundColor: '#f4f4f4', 
            width: 240
          }, 
          drawerLabelStyle: {
            fontSize:16,
          }
        }
        }
      >
        <Drawer.Screen name='Home' component={HomeScreen} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        
    }}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Settings' component={SettingScreen}/>

      </Drawer.Navigator>

    </NavigationContainer>
  )
}