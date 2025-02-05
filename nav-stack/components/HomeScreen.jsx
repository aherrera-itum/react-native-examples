import Reaact from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles/styles'



const HomeScreen = ( { navigation }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title}>Home Screen</Text>
            <Button 
                title='Go to Details' 
                onPress={ () => navigation.navigate('Details', { itemId: 42, message: 'Hello from Home!'} )}
            />
            <Button 
                title='Go to Profile' 
                onPress={ () => navigation.navigate('Profile')}
            />
        </View>
    )
}

export default HomeScreen