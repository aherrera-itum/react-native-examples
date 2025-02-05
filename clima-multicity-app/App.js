import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';


const API_KEY = 'd67ad2097069d0e3b64018283b8a6a17'; // Tu API Key

const CITIES = [
  { name: 'Panamá', country: 'PA' },
  { name: 'Chiriqui', country: 'PA' },
  { name: 'Boquete', country: 'PA' },
  { name: 'Colón', country: 'PA' },
];

const App = () => {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerClima = async (ciudad) => {
    setCargando(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.name},${ciudad.country}&appid=${API_KEY}&units=metric`
      );
      setClima(response.data);
    } catch (err) {
      setError('Error al obtener los datos del clima');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Selecciona una ciudad</Text>

      {/* Botones para seleccionar la ciudad */}
      <View style={styles.botonesContainer}>
        {CITIES.map((ciudad, index) => (
          <TouchableOpacity
            key={index}
            style={styles.boton}
            onPress={() => obtenerClima(ciudad)}
          >
            <Text style={styles.textoBoton}>{ciudad.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Mostrar datos del clima o mensajes de carga/error */}
      {cargando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : clima ? (
        <View style={styles.climaContainer}>
          <Text style={styles.titulo}>Clima en {clima.name}</Text>
          <Text style={styles.texto}>Temperatura: {clima.main.temp}°C</Text>
          <Text style={styles.texto}>Humedad: {clima.main.humidity}%</Text>
          <Text style={styles.texto}>Condición: {clima.weather[0].description}</Text>
          <Text style={styles.texto}>
            Viento: {clima.wind.speed} m/s, {clima.wind.deg}°
          </Text>
        </View>
      ) : null}
    </View>
  );
};

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
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
  },
  climaContainer: {
    marginTop: 20,
    alignItems: 'center',
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


export default App;
