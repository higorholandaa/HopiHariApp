import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
import css from '../index.css';




export default function Footer() {
  return (
    <View style={styles.container}>
    
    <View  style={styles.Footer}>
        <Link to="/Karta">
          <TouchableOpacity style={styles.btnFooter}>  
          
          <img id="icon-underline"  style={{height:'1.9rem'}} src={require('../img/MapsIcon.png')} />

          <Text>Karta</Text>
          </TouchableOpacity>
          </Link>
          
          
          <Link to="/App">
          <TouchableOpacity style={styles.btnFooterActive}>
            <img  style={{height:'2rem'}} src={require('../img/HomeIcon.png')} />
            <Text style={{color:'#fff'}}>Home</Text>
          </TouchableOpacity>
          </Link>
          
          <Link to="/Calendario">
            <TouchableOpacity style={styles.btnFooter}> 
              <img id="icon-underline"  style={{height:'1.9rem'}} src={require('../img/CalendarIcon.png')} />
            <Text>Calendário</Text>
            </TouchableOpacity>
          </Link>
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


  Footer:{
    borderTopEndRadius:60,
    borderTopStartRadius:60,
    justifyContent:'center',
    flexDirection:'row',
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: '#fff',
    position:'fixed'
  }, 

  btnFooter: {
    marginVertical:'0.6rem',
    marginHorizontal: '1rem',
    height:'5rem',
    width: '5rem',
    borderRadius:90,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#dedede',
  },

  btnFooterActive: {
    marginVertical:'0.6rem',
    marginHorizontal: '1rem',
    backgroundColor: '#b9ba33',
    height:'5rem',
    width: '5rem',
    borderRadius:90,
    justifyContent:'center',
    alignItems:'center',
  }
});
