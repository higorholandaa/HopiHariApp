import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Card from './Card'

export default function AtracoesInfantis(){
    return(


  <View style={styles.container}>
      <Header></Header>
      
        <View style={styles.Sectionteste1}>
            <View style={styles.Section}>
              <Card/>
              <Card/>
              <Card/>
              <Card/> 
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
    fontSize:'16',
    color:'#0000ff',
    fontWeight:600,
    textAlign:'center',
    marginHorizontal:'1.4rem',
    paddingBottom:'1.4rem'
  }, 
});
/* <>
  <View style={styles.container}>
      <Header></Header>
      <View style={styles.card}>
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
      </View>
      <Footer></Footer>

      <StatusBar style="auto" />

      <View style={styles.Sectionteste}>
                
            </View>
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

    Sectionteste:{
      height:'9rem',
    },
  
    SectionText:{
      alignItems:'center',
      justifyContent:'center',
      fontWeight:'610',
      color:'#b9ba33',
      fontSize:'22px'
    },

    card:{
      justifyContent:'center',
      alignItems:'center'
    },
  }); */
