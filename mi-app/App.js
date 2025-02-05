import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const addItem = () => {
    const newItem = {
      id: (items.length + 1).toString(),
      name: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Elementos</Text>
      <Button title="Agregar Elemento" onPress={addItem} />
      <ScrollView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});

export default App;


