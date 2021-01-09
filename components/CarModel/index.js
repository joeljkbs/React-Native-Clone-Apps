import React from 'react';
import {View, Text,ImageBackground,Linking} from  'react-native';
import Button from '../Button/index';
import styles from './styles';


const CarModel= (props) => {

  
  const {name,tagline,tagbold, picture, custom, existing} = props.model;
  const display= name === 'Model Y' ? 'Learn More' : 'Existing Inventory';
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
          {' '}
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
          Linking.openURL(custom);
        }}
      />
      <Button 
        type="secondary" 
        content={display} 
        onPress={()=>{
          Linking.openURL(existing);
        }}
      />  
      </View>

    </View>
);
};

export default CarModel;