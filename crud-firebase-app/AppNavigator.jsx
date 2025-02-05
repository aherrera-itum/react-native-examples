import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserList from './UserList'
import AddUser from './AddUser'
import EditUser from './EditUser'
import LoginScreen from './LoginScreen'


const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserList'>
                <Stack.Screen name='UserList' component= { UserList } options={{title: 'Lista de Usuarios'}} />
                <Stack.Screen name='AddUser' component={ AddUser } options={{title: 'Agregar Usuarios'}} />
                <Stack.Screen name='EditUser' component={ EditUser } options={{title: 'Editar Usuarios'}} />
                <Stack.Screen name='LoginScreen' component={ LoginScreen } options={{title: 'Verificar Credenciales'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator