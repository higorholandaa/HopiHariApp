import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';




export default function Karta() {
  return (
    <View style={styles.container}>
      

      <View style={styles.Section}>
        aa
        
      </View>

      <View style={styles.SectionImage}>
        
        
      </View>
      
      <View  style={styles.Footer}>
        <Link to="/Karta">
          <TouchableOpacity style={styles.btnFooter}>  
          
          <img id="icon-underline"  style={{height:'1.9rem'}} src={require('../src/MapsIcon.png')} />
 
          <Text>Karta</Text>
          </TouchableOpacity>
          </Link>
          
          

          <Link to="/App">
          <TouchableOpacity style={styles.btnFooterActive}>
            <img  style={{height:'2rem'}} src={require('../src/HomeIcon.png')} />
            <Text style={{color:'#fff'}}>Home</Text>
          </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.btnFooter}>
          <img  style={{height:'1.8rem'}} src={require('../src/CalendarIcon.png')} />
          <Text>Calendário</Text>
          </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );z
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
  },

  Header:{
    backgroundColor:'#b9ba33',
    flex: 0.48,
    borderBottomEndRadius: '80rem',
    borderEndRadius: '80rem',
    borderBottomStartRadius: '2rem',
    justifyContent:'center',
    alignItems:'center'
  },

  textTitle:{
    fontSize: 14,
    fontWeight: 600,
    color: '#000',
  },

  Section:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:'1.2rem',
    backgroundColor:'#fff',
    borderRadius:'2rem',
    width:'22rem',
    height:'16rem',
    marginLeft:'0.7rem',
  },

  MenuSection:{
    marginTop:'0.6rem',
    flexDirection:'row',
    alignItems:'center'
  },

  btnComprar:{
    backgroundColor:'#246855',
    borderRadius: 7,
  },

  textComprar:{
    fontWeight: '600',
    fontSize:18,
    marginRight: '1.4rem',
    marginLeft: '0.7rem',

  },

  textBtnComprar:{
    color: '#fff',
    justifyContent:'center',
    alignItems:'center',
    margin: '0.96rem',
  },

  btnMenu:{
    width:'4rem',
    marginHorizontal:'1.4rem',
    justifyContent:'center',
    alignItems:'center'
  },

  TextMenu:{
    fontSize: 13,
    fontWeight: 500,
    paddingTop:'0.2rem',
    justifyContent:'center',
    alignItems:'center'
  },


  SectionImage:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:'1.5rem',
    borderRadius:'2rem',
    height:'8rem',
    marginLeft:'0.7rem',
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
