import Reaact from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles/styles'


const DetailsScreen = ({route, navigation}) => {
    const {itemId, message } = route.params
    

    return (
        <View style={styles.container}>
            <Text style={ styles.tittle }>Details Screen</Text>
            <Text>Item Id: { itemId }</Text>
            <Text>Message: { message }</Text>
            <Button
                title='Go Back'
                onPress={()=> navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen