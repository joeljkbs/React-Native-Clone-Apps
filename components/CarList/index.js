import React from 'react';
import { View,Text,FlatList,Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars'
import CarModel from '../CarModel';
const CarList=(props)=>{

    return(
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=><CarModel model={item}/>}
            snapToAlignment={'start'}
            decelerationRate='fast'
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CarList;