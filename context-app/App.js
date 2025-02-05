import React, { createContext, useContext, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ThemeContext = createContext()

const App = () => {
  
  const [theme, setTheme ] = useState('light')

  const toggleTheme = () => setTheme( theme === 'light' ? 'dark' : 'light' )

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Screen/>
    </ThemeContext.Provider>
  )
}


const Screen = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <View style={[ styles.container, theme === 'light' ? styles.light : styles.dark ] }>
      <ThemeSwitcher/>
    </View>
  )
}

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <View>
      <Text style={styles.text}>Tema Actual: { theme } </Text>
      <Button title='Cambiar Tema' onPress={toggleTheme} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItem: 'center'
  },
  light: {
    backgroundColor: '#ffffff'
  },
  dark: {
    backgroundColor: '#333333'
  },
  text: {
    color: 'black',
    marginBottom: 20, 
    fontSize: 18
  }
})


export default App

