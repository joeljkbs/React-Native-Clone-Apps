import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import CarList from './components/CarList'
export default function App() {
  return (
    <View style={styles.container}>
      
      <CarList/>

      {/* <CarModel
      name={"Model 3"}
      tagline={"Order Online For "}
      tagbold={"Touchless Delivery"}
      picture={require('./assets/images/Model3.jpeg')}
      /> */}
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
