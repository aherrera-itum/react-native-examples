import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'

const UserForm = ( { onSubmit, inialValues = { name: '', email:'', password: '' } }) => {
    const [name, setName] = useState(inialValues.name)
    const [email,setEmail] = useState(inialValues.email)
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})


    const ValidateForm = () =>{
        const newErrs = {}
        if (!name) newErrs.name = 'El nombre es requerido'
        if (!email) newErrs.email = 'El emial es requerido'
        else if (!/\S+@\S+\.\S+/.test(email)) newErrs.email = 'El email no tiene un formato válido'
        if (!password) newErrs.password = 'La contraseña es requerida'
        else if (password.length < 6 ) newErrs.password = 'La contraseña debe tener al menos 6 caracteres'
        
        setErrors(newErrs)

        return Object.keys(newErrs).length === 0
    }

    const handleSubmit = async () => {
        if ( ValidateForm() ){
            try {
                onSubmit( { name, email, password })
            } catch (error) {
                console.error('Error al registrar el usuario: ', error)
            }   
        }
    }

    return (
        <View style= { styles.container }>
            <Text style={ styles.label} >Nombre:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Ingresa el nombre'
                value= { name }
                onChangeText={ setName }
            />
            { errors.name && <Text style={ styles.errorText }> {errors.name} </Text>}


            <Text style={ styles.label} >Email:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Ingresa el email'
                value= { email }
                onChangeText={ setEmail }
            />
            { errors.email && <Text style={ styles.errorText }> {errors.email} </Text>}


            <Text style={ styles.label} >Contraseña:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Ingresa la contraseña'
                value= { password }
                onChangeText={ setPassword }
            />
            { errors.password && <Text style={ styles.errorText }> {errors.password} </Text>}

            <View style={ StyleSheet.buttonContainer }>
                <Button
                    title='Guardar'
                    onPress={handleSubmit}
                    color='#2196F3'
                />
            </View>

        </View>
        
    )



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      marginBottom: 8,
      backgroundColor: '#fff',
    },
    buttonContainer: {
      marginTop: 16,
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginBottom: 8,
    },
  });


export default UserForm