import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState<string>('');
  
  const convert = amount => {
    const parsedAmount = parseInt(amount);
    if (isNaN(parsedAmount)) {
      Alert.alert('Error', 'Please enter a valid number');
      return;
    }
    const conversion = (parsedAmount * 0.00022).toFixed(2);
    Alert.alert(`$${conversion} USD`);
  };
  
  return (
    <View style={styles.container}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Enter amount (Ingrese cantidad):</Text>
      <TextInput keyboardType="numeric" onChangeText={setInputValue} style={styles.textInput} value={inputValue} />
      <TouchableOpacity onPress={() => convert(inputValue)} style={styles.button}>
          <Text style={styles.buttonText}>Convert (Convertir)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
      backgroundColor: '#C8102E',
      padding: 18,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 7
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 50,
    marginBottom: 20,
    padding: 10,
    width: 250,
  }
});
