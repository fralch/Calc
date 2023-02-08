import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  function solveEquation(equation) {
    let terms = equation.split("=")[0].split("+");
    let constant = equation.split("=")[1];
    let xCoeff = 0;
    for (let i = 0; i < terms.length; i++) {
      let term = terms[i].trim();
      if (term.includes("x")) {
        xCoeff += parseInt(term.replace("x", ""));
      } else {
        constant -= parseInt(term);
      }
    }
    return "x = " + (constant / xCoeff);
  }
  
  let equation = "2x - 3 = 7";
  console.log(solveEquation(equation));

    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
