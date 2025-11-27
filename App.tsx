import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/components/Nav'; // Importera Nav-komponenten

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONDO Journal! 🚀</Text>
      <StatusBar style="auto" />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bababa',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Viktigt för absolut-positionerad Nav
    paddingBottom: 60,    // Ge plats åt Nav
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
