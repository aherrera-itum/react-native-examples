import React from 'react'
import { View, Text, Button } from 'react-native'
import { increment, decrement, incrementByAmount } from './reducer'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <View style={{ marginTop: 30 }}>
            <Text>Count: { count }</Text>
            <Button title='Incremento' onPress={()=>dispatch(increment())}/>
            <Button title='Decremento' onPress={()=>dispatch(decrement())}/>
            <Button title='Incrementar por 5' onPress={()=>dispatch(incrementByAmount(5))}/>
        </View>
    )
}

export default Counter