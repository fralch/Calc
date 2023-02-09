import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IngresoDatos from './components/IngresoDatos';

export default function App() {
    return (
    <View style={styles.container}>
      <IngresoDatos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22252D',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
