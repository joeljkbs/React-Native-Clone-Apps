import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarModel from './components/CarModel'
export default function App() {
  return (
    <View style={styles.container}>
      <CarModel
      name={"Model 3"}
      // price={"Starting at C$99,500"}
      tagline={"Order Online For "}
      tagbold={"Touchless Delivery"}
      picture={require('./assets/images/Model3.jpeg')}
      />
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
  }
});
