import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BancoProvider from './Provider/BancoProvider';
import Navegacion from './Components/Navegacion';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Su Banco de Preferencia</Text>
      <StatusBar style="auto" />
      <BancoProvider>
    <Navegacion></Navegacion>
    </BancoProvider>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
