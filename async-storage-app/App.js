import React, { useState, useEffect } from "react"
import { View, TextInput, Button, Text, FlatList, StyleSheet, ToastAndroid } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () =>{
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])


  useEffect(() => {
    loadNotes();
  }, [])

  const saveNote = async () => {    
    if (note.trim() === ''){
      ToastAndroid.show('Por favor, escribe una nota', ToastAndroid.SHORT)
      return 
    }

    try {
      const newNote = { id: Date.now().toString(), text: note }
      const updateNotes = [ ...notes, newNote ]
      await AsyncStorage.setItem('notes', JSON.stringify(updateNotes))
      setNotes(updateNotes)
      setNote('')
      
      ToastAndroid.show('Nota guardada correctamente', ToastAndroid.SHORT)
    } catch(error) {
      ToastAndroid.show('No se pudo guardar la nota.',ToastAndroid.SHORT)
    }
  }

  const loadNotes = async () => {
    try {
      const storageNotes = await AsyncStorage.getItem('notes')
      if (storageNotes !== null ){
        setNotes(JSON.parse(storageNotes))
      } 
    } catch (error) {
      console.error('No se pudieron cargar las notas')
      ToastAndroid.show('No se pudieron cargar las notas', ToastAndroid.SHORT)
    }
  }

  const deleteNote = async (id) => {
    try {
      const updatedNotes = notes.filter( (note) => note.id !== id )
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
      setNotes(updatedNotes)
    } catch (error) {
      ToastAndroid.show('No se pudo eliminar la nota', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicacion de Captura de Notas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una nota"
        value = { note }
        onChangeText={setNote}
      />
      <Button title='Gardar Nota' onPress={saveNote} />
      <Text />
      <FlatList 
        data={ notes }
        keyExtractor={ (intem) => intem.id }
        renderItem={ ( {item}) => (
          <View style= { styles.noteItem }>
            <Text style= {styles.noteText }>{ item.text } </Text>
            <Text/>
            <Button title="Eliminar" onPress={() => deleteNote(item.id)} />
          </View>
        )}      
      />
    </View>
  )

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:25, 
    backgroundColor: 'lightgreen'
  },
  title:{
    fontSize:24, 
    fontWeight:'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  input:{
    backgroundColor:'white',
    height:40,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth:1,
    padding:10
  },
  noteItem:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    marginBottom: 10,
    backgroundColor:'white',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:5
  },
  noteText:{
    fontSize:16
  }
})

export default App