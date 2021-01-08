import React from 'react';
import {View, Text,ImageBackground} from  'react-native';
import Button from '../Button/index';
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

      <Button 
        type="primary" 
        content={"Custom Order"} 
        onPress={()=>{
          console.warn("Custom Order was pressed");
        }}
      />

      <Button 
        type="secondary" 
        content={"Existing Inventory"} 
        onPress={()=>{
          console.warn("Existing inventory was pressed");
        }}
      />
      
    </View>
);
};

export default CarModel;