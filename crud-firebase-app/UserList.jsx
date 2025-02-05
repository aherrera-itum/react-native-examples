import React, { useEffect, useState } from "react"
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { db, auth } from './firebaseConfig'
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
import { onAuthStateChanged, deleteUser  } from "firebase/auth"


const UserList = ({ navigation }) => {
    const [ users, SetUsers ] = useState([])
    const [ loading, SetLoading] = useState(true)
    const [ currentUser, setCurrentUser]= useState(null)

    const unsusbscribeAuth = onAuthStateChanged(auth, (user)=>{
      setCurrentUser(user)
    })

    useEffect( () => {
        const usersCollection = collection(db, 'users')

        const unsusbscribe = onSnapshot(usersCollection, (snapshot) => {
            const userList = snapshot.docs.map( (doc)=>({
                id: doc.id,
                ...doc.data()
            }))
            SetUsers(userList)
            SetLoading(false)
        })
        return () => unsusbscribe() 
    }, [] )

    const deleteUser = async (id ) => {
        try {
            await deleteDoc(doc(db, 'users', id ))
            if (currentUser && currentUser.email === email ){
              await deleteUser(currentUser)
            }
        } catch (error) {
            console.error('Error al eliminar el usuario:', error)
        }
    }

    if (loading){
        return (
            <View style={ styles.loadingContainer }>
                <ActivityIndicator size='large' color='#0000fff'/>
            </View>        
        )
    } 

    return (
        <View style={ styles.container}>
            { currentUser && (
              <View style={ styles.authUserContainer}>
                <Text style={ styles.authUserText} >
                  Usuario autenticado: { currentUser.email }
                </Text>
              </View>
            )
            
            }

            <FlatList
                data={ users }
                keyExtractor={ (item ) => item.id }
                renderItem={ ( { item } ) => (
                    <View style={ styles.listItem} >
                        <View style={ styles.userInfo}>
                            <Text style={ styles.userName }> { item.name }</Text>
                            <Text style={ styles.userEmail }> { item.email }</Text>
                        </View>
                        <View style={ styles.buttonsContainer}>
                            {/* <TouchableOpacity style={ styles.editButton } onPress={ () => navigation.navigate('EditUser', { id: item.id })}>
                                <Text style= { styles.buttonText }> Editar </Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={ styles.deleteButton } onPress={ () => deleteUser(item.id)}>
                                <Text style= { styles.buttonText }> Eliminar </Text>
                            </TouchableOpacity>
                        </View>     
                    </View>   
                                
                )}
            />
            <View styles= { styles.bottomButtons}>
                <Button
                    title="Agregar Usuario"
                    onPress={ () => navigation.navigate('AddUser')}
                />
                <Text/>
                <Button
                    title="Verificar Credenciales"
                    onPress={ () => navigation.navigate('LoginScreen')}
                    color='#4CAF50'
                />
            </View>
        </View>
    )

}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  authUserContainer: { padding: 10, backgroundColor: '#e3f2fd', borderRadius: 8, marginBottom: 16 },
  authUserText: { fontSize: 16, fontWeight: 'bold', color: '#1565c0' },
  listItem: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  userInfo: { flex: 1 },
  userName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  userEmail: { fontSize: 14, color: '#666' },
  buttonsContainer: { flexDirection: 'row', alignItems: 'center' },
  editButton: { backgroundColor: '#4CAF50', padding: 8, borderRadius: 4, marginRight: 8 },
  deleteButton: { backgroundColor: '#F44336', padding: 8, borderRadius: 4 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  bottomButtons: { marginTop: 16, gap: 8 },
});
  
  export default UserList