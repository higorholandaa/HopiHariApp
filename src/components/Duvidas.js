import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
// import css from '../index.css';
import Header from './Header';
import Footer from './Footer';


export default function Duvidas() {
  return (
    <View style={styles.container}>
      <Header></Header>
      
        <View style={styles.Sectionteste1}>
            <View style={styles.Section}>
              aa
            </View>
            <View style={styles.Sectionteste}>
                
            </View>
        </View>

      <Footer></Footer>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
  },
  textTitle:{
    fontSize: '26px',
    fontWeight: '900',
    color: '#767676',
    marginTop: '1rem',
  },

  Section:{
    alignItems:'center',
    marginTop:'1.3rem',
    backgroundColor:'#fff',
    borderRadius:'0.5rem',
    padding:'0.5rem',
    width:'22rem',
    height: 'auto',
    textAlign: 'center',
  },

  Sectionteste:{
    height:'9rem',
  },

  Sectionteste1:{
    justifyContent:'center',
    alignItems:'center'
  },

  TextSection:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:16,
    fontWeight:430,
    textAlign:'center',
    marginHorizontal:'1.4rem'
  },

  TextSectionAzul:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:16,
    color:'#0000ff',
    fontWeight:600,
    textAlign:'center',
    marginHorizontal:'1.4rem',
    paddingBottom:'1.4rem'
  }, 
});
