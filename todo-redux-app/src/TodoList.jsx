import React, { useState } from "react";
import {View, Text, TextInput, Button, FlatList, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./todoSlice";

const TodoList = () => {
    const [text, setText ] = useState('')
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)



    const handleAddOrUpdateTodo = () => {
        if (text.trim()){
            if (editId){
                dispatch(updateTodo( { id: editId, newText : text}))
                setEditId(null)
            }else{
                dispatch(addTodo(text))
            }
            setText('')
        }
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
        setText('')
        setEditId(null)
    }

    const handleStartEditing = (id, currentText) => {
        setEditId(id)
        setText(currentText)
    }

    return (
        <View style={ styles.container }>
            <Text style= { styles.tittle }>Lista de Tareas</Text>
            <TextInput
                style= { styles.input}
                placeholder = { editId ? 'Edita la tarea':'Adiciona una nueva tarea' }
                value= { text }
                onChangeText = { setText }
            />
            <Button
                title= { editId ? 'Save':'Add' }
                onPress={ handleAddOrUpdateTodo }
            />
            <FlatList
            data={ todos }
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.todoItem}>
                        <Text>{item.text}</Text>
                        <View style={styles.buttonsContainer}>
                            <Button title="Edit" onPress={() => handleStartEditing(item.id, item.text)} />
                            <Text/>
                            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
                        </View>
                    </View>
                )
            }
            }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: 25, 
        padding:25
    }, 
    tittle:{
        fontSize: 14, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    input:{
        borderColor: 'grey',
        borderWidth:1, 
        padding:10,
        marginBottom: 10
    },
    todoItem:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10, 
        borderBottomWidth: 1
    }, 
    buttonsContainer: {
        flexDirection: 'row'
    }
})



export default TodoList
