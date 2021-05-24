import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Card from './Card'

export default function AtracoesInfantis(){
    return(

<>
  <View style={styles.container}>
      <Header></Header>
        <Card />
        <Card />
        <Card />
        <Card />
      <Footer></Footer>

      <StatusBar style="auto" />
    </View>
</>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dedede',
    },
  
    textTitle:{
      fontSize: 14,
      fontWeight: 600,
      color: '#000',
    },
  
    Section:{
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor:'#fff',
    },
  
    SectionText:{
      alignItems:'center',
      justifyContent:'center',
      fontWeight:'610',
      color:'#b9ba33',
      fontSize:'22px'
    },
  });
