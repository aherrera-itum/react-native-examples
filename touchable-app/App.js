import React from 'react'

import {
  View, 
  Text, 
  TouchableOpacity,
  TouchableHighlight, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback
} from 'react-native'


const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignContent:'center, padding: 20'}}> 
      <TouchableOpacity 
        style={{backgroundColor:'lightblue', padding:10, margin:10, borderRadius:5 }}
        onPress={ () => console.log('Touchable Opacity Pressed ')}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight 
        style={{backgroundColor:'lightgreen', padding:10, margin:10, borderRadius:5 }}
        onPress={ () => console.log('Touchable Hightlight Pressed ')}
        underlayColor='darkgreen'
      >
      <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback
        onPress={ () => console.log('Touchable WithoutFeedback Pressed ')}
      >
        <View style={{ backgroundColor:'lightcoral', padding:10, margin:10, borderRadius:5}}>
          <Text>TouchableWithoutFeedback</Text>
        </View>        
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback
        onPress={ () => console.log('Touchable NativeFeedback Pressed ')}
      >
        <View style={{ backgroundColor:'lightyellow', padding:10, margin:10, borderRadius:5}}>
          <Text>TouchableNativeFeedback</Text>
        </View>    
      </TouchableNativeFeedback>
    </View>
  )
}
export default App