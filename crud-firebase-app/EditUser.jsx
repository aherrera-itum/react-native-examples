import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native"
import UserForm from "./UserForm"
import { db } from "./firebaseConfig"
import { doc, getDoc, updateDoc } from 'firebase/firestore'




const EditUser = ( { navigation, route }) => {
    const { id }  = route.params
    const [ user, setUser ] = useState({name:'', email :''})
    const [loading, SetLoading] = useState(true)
    const [ errors, setErrors] = useState(null)

    useEffect( () =>{
        const fetchUser = async () => {
            try {
                const userDoc = await getDoc( doc(db, 'users', id ))
                if(userDoc.exists()){
                    setUser(userDoc.data())
                }else{
                    setErrors('El usuario no fue encontrado')
                }
            } catch (error) {
                setErrors('Error al cargar el usuario')
                console.error(error)
            }finally {
                SetLoading(false)
            }
        }
        fetchUser()
    }, [ id ] )

    const handleSubmit = async (updatedUser) => {
        try {
            await updateDoc( doc(db, 'users', id), updatedUser)
            navigation.goBack()
        } catch (error) {
            console.error('Error al actualizar el usuario:', error)
            setErrors('Error al actualizar el usuario')
        }
    }


    if (loading){
        return (
            <View style={ { flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        )
    }

    if (errors){
        return (
            <View style={ { flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={ { color: 'darkRed', fontSize: 18, fontWeight:'bold' }}> { errors } </Text>
            </View>
        )
    }

    return (
       <UserForm onSubmit={ handleSubmit } inialValues={ user } />
    )
}

export default EditUser