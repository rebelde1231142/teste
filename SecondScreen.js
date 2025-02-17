// filepath: /C:/Users/Aluno/Documents/GitHub/teste/SecondScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a segunda página!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecondScreen;