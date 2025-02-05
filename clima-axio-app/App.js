import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from 'axios'

const API_KEY = 'd67ad2097069d0e3b64018283b8a6a17'
const CITY = 'Panama, PA'

const App = () => {
  const [clima, setClima ] = useState(null)
  const [ cargando, setCargando ] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const obtenerClima = async ()=>{
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        setClima(response.data)
        setError(null)        
      } catch (error){
        setError('Error al obtener datos del clima')        
      } finally {
        setCargando(false)
      }
    }

    obtenerClima()

  },[])

  if (cargando){
    return(
      <View style={styles.contenedor }>
        <ActivityIndicator size="large" color='green'/>
      </View>
    )
  }

  if(error){
    return (
      <View style={styles.contenedor }>
        <Text style={styles.error }>{ error }</Text>
      </View>
    )
  }

  return (
    <View style={ styles.contenedor}>
      <Text style={ styles.titulo}>Clima en { clima.name } </Text>
      <Text style={styles.texto } >Temperatura: { clima.main.temp } °C</Text>
      <Text style={styles.texto } >Humedad: { clima.main.humidity } % </Text>
      <Text style={styles.texto } >Condición { clima.weather[0].description } </Text>
      <Text style={styles.texto } >Viento: { clima.wind.speed } m/s , { clima.wind.deg }° </Text>
    </View>
  )

}


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default App
