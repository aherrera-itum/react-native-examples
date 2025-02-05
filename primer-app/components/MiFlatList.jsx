import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MiFlatList = () => {
  // Datos de ejemplo
  const data = [
    { id: '1', name: 'Elemento 1', description: 'Descripción del elemento 1' },
    { id: '2', name: 'Elemento 2', description: 'Descripción del elemento 2' },
    { id: '3', name: 'Elemento 3', description: 'Descripción del elemento 3' },
    { id: '4', name: 'Elemento 4', description: 'Descripción del elemento 4' },
    { id: '5', name: 'Elemento 5', description: 'Descripción del elemento 5' },
    { id: '6', name: 'Elemento 6', description: 'Descripción del elemento 6' },
    { id: '7', name: 'Elemento 7', description: 'Descripción del elemento 7' },
    { id: '8', name: 'Elemento 8', description: 'Descripción del elemento 8' },
    { id: '9', name: 'Elemento 9', description: 'Descripción del elemento 9' },
    { id: '10', name: 'Elemento 10', description: 'Descripción del elemento 10' },
    { id: '11', name: 'Elemento 11', description: 'Descripción del elemento 11' },
    { id: '12', name: 'Elemento 12', description: 'Descripción del elemento 12' },
    { id: '13', name: 'Elemento 13', description: 'Descripción del elemento 13' },
    { id: '14', name: 'Elemento 14', description: 'Descripción del elemento 14' },
    { id: '15', name: 'Elemento 15', description: 'Descripción del elemento 15' },
    { id: '16', name: 'Elemento 16', description: 'Descripción del elemento 16' },
  ];

  // Función para renderizar cada elemento
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Ejemplo</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MiFlatList;