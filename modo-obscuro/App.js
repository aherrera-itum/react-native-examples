import React from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'


const App = () => {
  const colorScheme  = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const styles = StyleSheet.create({
    container : {
      flex: 1, 
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: isDarkMode ? '#121212': '#ffffff'
    },
    text: {
      color: isDarkMode ? '#ffffff': '#000000',
    }
  })

  return (
    <View style= {styles.container}>
      <Text style= {styles.text}>
        { isDarkMode? 'Modo Obscuro':'Modo claro'}
      </Text>
    </View>
  )
}
export default App