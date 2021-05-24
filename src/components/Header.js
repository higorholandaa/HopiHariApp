import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
// import css from '../index.css';




export default function  Header() {
  return (
    <View style={styles.container}>
    
        <View style={styles.Header}>
            <img  style={{height:'4rem'}} src={require('../img/logo.png')} />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
  },

  Header:{
    // position:'fixed',
    width:'100%',
    height:'6rem',
    backgroundColor:'#b9ba33',
    borderBottomEndRadius: '80rem',
    borderEndRadius: '80rem',
    borderBottomStartRadius: '2rem',
    justifyContent:'center',
    alignItems:'center',
  },

  
});
