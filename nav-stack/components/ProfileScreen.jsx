import Reaact from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles/styles'


const ProfileScreen = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={ styles.tittle }>Profile Screen</Text>
            <Button
                title='Go Back'
                onPress={()=> navigation.goBack()}
            />
        </View>
    )
}

export default ProfileScreen