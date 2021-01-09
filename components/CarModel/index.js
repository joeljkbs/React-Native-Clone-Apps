import React from 'react';
import {View, Text,ImageBackground} from  'react-native';
import Button from '../Button/index';
import styles from './styles';

const CarModel= (props) => {

  const {name, price,tagline,tagbold, picture} = props;
return (
    <View style={styles.carContainer}>      
      
    <ImageBackground 
      source={picture}
      style={styles.image}>
    </ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title1}>{name}</Text>
        <Text style={styles.title2}>
          {tagline}
          <Text style={styles.tagb}>
            {tagbold}
          </Text>
        </Text>

      </View>

      <View style={styles.buttonsContainer}>
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

    </View>
);
};

export default CarModel;