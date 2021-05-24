import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
// import css from '../index.css';
import Header from './Header';
import Footer from './Footer';




export default function HopiNiver() {
  return (
    <View style={styles.container}>
      <Header></Header>
      
        <View style={styles.Sectionteste1}>
            <View style={styles.Section}>
                <img style={{height:'5rem', marginTop:0}} src={require('../img/LogoHopiniver.png')} />
                <Text style={styles.TextSection}>Conheça nossos pacotes e faça sua festa de aniversário no Hopi Hari com direito
                a bolo, docinhos, e muito mais. Tudo isso sem falar nas mais de 40 atrações espalhadas por nosso território,
                das infantis às mais radicais. {'\n'} Faça agora um orçamento! Envie um e-mail para</Text>
                
                <Text style={styles.TextSectionAzul}>vendashopiniver@hopiharicorp.com.br</Text>
                <img  style={{height:'13rem', marginBottom:'2rem'}} src={require('../img/mesa_hopiNiver.jpg')} />

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

  Section:{
    alignItems:'center',
    marginTop:'1.3rem',
    backgroundColor:'#fff',
    borderRadius:'2rem',
    width:'22rem',
    height: 'auto',
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
