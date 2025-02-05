import React, { useState } from "react";
import UserForm from "./UserForm";
import { db, auth } from './firebaseConfig'
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const AddUser = ( { navigation }) => {

    const handleSubmit = async (user) =>{
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
            const userCreated = userCredential.user

            const userDB = { 
                name: user.name, 
                email: user.email,
                password: userCreated.uid
            }

            await addDoc(collection(db, 'users'), userDB)
            navigation.goBack()
        } catch (error) {
            console.error('Error al agregar el usuario', error)
        }        
    }
    return (
        <UserForm onSubmit={ handleSubmit } />
    )
}

export default AddUser