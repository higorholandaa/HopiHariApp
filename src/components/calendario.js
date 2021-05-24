import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';





export default function Calendario() {
  return (
    <View style={styles.container}>
      <Header></Header>

      <View style={styles.Section}>
        <Text style={styles.SectionText}>CONFIRA O CALENDÁRIO DO</Text>
        <Text style={styles.SectionText}> PAÍS MAIS DIVETIDO DO MUNDO!</Text>


        <View style={styles.SectionImage}>
        {/* <img  style={{height:'32rem'}} src={require('../img/CalendarIcon.png')} /> */}
        
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
