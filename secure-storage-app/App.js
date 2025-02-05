import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const App = () => {
  const [inputVal, setInputVal] = useState('')
  const [storageVal, setStorageVal] = useState('')
  
  
  const SaveToSecureStore = async(key,value) => {
    try {
      await SecureStore.setItemAsync(key,value)
      Alert.alert('Exito', 'Dato Guardado Correctamente')
    } catch (error) {
      Alert.alert('Error','No se pudo guardar el dato')      
    }
  }

  const getFromSecureStore = async (key) => {
    try {
      const result = await SecureStore.getItemAsync(key)
      if (result){
        setStorageVal(result)
      }else{
        Alert.alert('Error', 'No se encontró ningún dato')
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo recuperar el dato')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el valor para almacenar de forma segura:</Text>
      <TextInput 
        style={ styles.input }
        value = { inputVal }
        onChangeText={ setInputVal }
        placeholder='Escriba el valor a guardar'      
      />
      <Button 
        title='Guardar'
        onPress={ () => SaveToSecureStore('secureKey', inputVal) }
      />
      <Text/>
      <Button 
        title='Recuperar'
        onPress={ () => getFromSecureStore('secureKey') }
      />
      <Text/>
      { storageVal ?  <Text style= { styles.result }>Valor Guardado: { storageVal } </Text>: null }

    </View>
  )

}

styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding:20
  },
  label:{
    fontSize:16,
    marginBottom:10
  },
  input:{
    height:40,
    borderColor:'grey',
    marginBottom:5,
    borderWidth: 1
  },
  result:{
    marginTop:10,
    fontSize:16,
    fontWeight:'bold'
  }
})

export default App