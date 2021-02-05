import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors';
import LoginPage from "./assets/loginPage"
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = '#2D8F9C' barStyle ="light-content" />
      <LoginPage/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : colors.primary,
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
