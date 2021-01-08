import React from 'react';
import {View, Text,ImageBackground} from  'react-native';
import styles from './styles';

const CarModel= (props) => {
return (
    <View style={styles.carContainer}>      
      
    <ImageBackground 
      source={require('../../assets/images/ModelX.jpeg')}
      style={styles.image}>
    </ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title1}>Model S</Text>
        <Text style={styles.title2}>Starting at C$69,420</Text>
      </View>
    </View>
);
};

export default CarModel;