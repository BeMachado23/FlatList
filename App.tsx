import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

const nomes= ["Ana Maria", "Bruno  Alves", "Carlos José", "Daniel Martins", "Efraim Gomes", "Francisco Junior"]

  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, marginTop:100, fontWeight: 'bold'}}>Lista</Text>
      <FlatList
      data={nomes}
      renderItem={({ item }) => (
        <Text style={styles.nome}>{item}</Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome:{
    fontSize: 18,
    marginTop: 12,
    borderWidth: 2,
    textAlign: 'center'
  }
});
