import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollableList = () => {
  return (
    <ScrollView style={styles.container}>
      {Array.from({ length: 10 }, (_, index) => (
        <View key={index} style={styles.itemView}>
          <Text style={styles.itemText}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  itemView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfdfdf',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScrollableList;