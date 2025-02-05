import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const mapRef = useRef(null);

  // Ubicaciones fijas
  const goldenGate = { latitude: 37.8199, longitude: -122.4783, title: 'Golden Gate' };
  const statueOfLiberty = { latitude: 40.6892, longitude: -74.0445, title: 'Estatua de la Libertad' };

  // Función para obtener la ubicación actual
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso para acceder a la ubicación denegado');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    const userLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      title: 'Tu ubicación',
    };
    setCurrentLocation(userLocation);

    // Actualizar las ubicaciones en el estado
    setLocations([userLocation, goldenGate, statueOfLiberty]);

    // Centrar el mapa en la ubicación actual
    mapRef.current.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  // Obtener la ubicación al cargar la aplicación
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const goToGoldenGate = () => {
    mapRef.current.animateToRegion({
      latitude: goldenGate.latitude,
      longitude: goldenGate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const goToStatueOfLiberty = () => {
    mapRef.current.animateToRegion({
      latitude: statueOfLiberty.latitude,
      longitude: statueOfLiberty.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: currentLocation ? currentLocation.latitude : 9.0289217,
          longitude: currentLocation ? currentLocation.longitude : -79.5213633,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: loc.latitude,
              longitude: loc.longitude,
            }}
            title={loc.title}
            pinColor={loc.title === 'Tu ubicación' ? 'blue' : 'red'} // Color diferente para cada marcador
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Mi Ubicación" onPress={getCurrentLocation} />
        <Text/>
        <Button title="Golden Gate" onPress={goToGoldenGate} />
        <Text/>
        <Button title="Estatua de la Libertad" onPress={goToStatueOfLiberty} />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});