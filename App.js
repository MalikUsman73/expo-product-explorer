import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Wireless Mouse', price: '$19.99' },
  { id: '2', name: 'Mechanical Keyboard', price: '$59.99' },
  { id: '3', name: 'USB-C Hub', price: '$24.99' },
  { id: '4', name: '27" Monitor', price: '$189.99' },
  { id: '5', name: 'Webcam 1080p', price: '$34.99' },
];

function ProductItem({ name, price }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.name}>Malik Usman</Text>
      <Text style={styles.roll}>Roll No: i233020</Text>

      <FlatList
        style={styles.list}
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem name={item.name} price={item.price} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
  },
  roll: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
});
