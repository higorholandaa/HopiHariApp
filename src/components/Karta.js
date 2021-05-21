import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';




export default function Karta() {
  return (
    <View style={styles.container}>
      

      {/* <View style={styles.Section}>
        <Text style={styles.SectionText}>CONFIRA O MAPA DO</Text>
        <Text style={styles.SectionText2}> PAÍS MAIS DIVETIDO DO MUNDO!</Text>
        
      </View> */}

      <View style={styles.SectionImage}>
        <img  style={{height:'41.8rem'}} src={require('../img/karta.jpg')} />
        
      </View>
      
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
              <img id="icon-underline" style={{height:'1.9rem'}} src={require('../img/CalendarIcon.png')} />
            <Text >Calendário</Text>
            </TouchableOpacity>
          </Link>
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
    marginTop:'1.5rem',
    // backgroundColor:'#fff',
  },

  SectionText:{
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'600',
    color:'#b9ba33',
    fontSize:'22px',
  },

  SectionText2:{
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'600',
    color:'#b9ba33',
    fontSize:'22px',
    marginBottom:'14px',
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
    alignItems:'center',
  },


  SectionImage:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'38rem',
    marginBottom:'3rem',
    flex:1,
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
    position:'fixed',
    textDecorationLine:'none',
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
    textDecorationLine:'none',
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
