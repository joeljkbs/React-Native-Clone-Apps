import {StyleSheet, Dimensions} from 'react-native';

const styles= StyleSheet.create({
    carContainer: {
        width:'100%',
        height: Dimensions.get('window').height
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      title1: {
        fontSize: 40,
        fontWeight: '400'
      },
      title2: {
        fontSize: 15,
        color: '#5c5e55'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    },
    tagb: {
      color:'black',
      fontWeight:'900',
      textDecorationLine:'underline'
    }
});

export default styles;