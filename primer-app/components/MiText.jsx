import React from 'react'
import {View, Text } from 'react-native'


export default function MiText(){
    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: 'blue'}}>
                <Text style={{ color: 'white', backgroundColor:'green'}}>Este es el texto del primer textview</Text>
            </View>
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: 'orange'}}>
                <Text style={{color: 'white', backgroundColor:'green'}}>Este es el texto del segundo textview</Text>
            </View>
        </View>
    )
}