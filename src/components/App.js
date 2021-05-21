import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
import css from '../index.css';




export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
      <img  style={{height:'4rem'}} src={require('../img/logo.png')} />
      </View>

      <View style={styles.Section}>
        <View style={{flexDirection:'row', marginBottom:'1rem'}}>
          <img  style={{height:'2.5rem'}} src={require('../img/TicketIcon.png')} />
          <Text style={styles.textComprar}> COMPRE SEU {'\n'} PASSAPORTE!</Text>
          <TouchableOpacity style={styles.btnComprar}> 
            <Text style={styles.textBtnComprar}>COMPRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MenuSection}>
            <TouchableOpacity style={styles.btnMenu}> 
              <img  style={{height:'3rem', width:'3rem'}} src={require('../img/AtracoesIcon.png')} />
              <Text style={styles.TextMenu}>Atrações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnMenu}> 
              <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/ServiceIcon.png')} />
              <Text style={styles.TextMenu}>Serviços</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnMenu}> 
              <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/DuvidaIcon.png')} />
              <Text style={styles.TextMenu}>Duvidas</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.MenuSection}>
            <TouchableOpacity style={styles.btnMenu}> 
              <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/HopiNiverIcon.png')} />
              <Text style={styles.TextMenu}>Hopi Niver</Text>
            </TouchableOpacity>

            <TouchableOpacity v> 
              <img  style={{height:'3rem' , width:'3rem', marginLeft:'13px'}} src={require('../img/GatronomiaIcon.png')} />
              <Text style={styles.TextMenu}>Gastronomia</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnMenu}> 
              <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/LocationIcon.png')} />
              <Text style={styles.TextMenu}>Localização</Text>
            </TouchableOpacity>
        </View>
        
      </View>

      <View style={styles.SectionImage}>
        <View>
          <img  style={{height:'9.3rem', borderRadius:'2rem'}} src={require('../img/CriançaGratis.jpg')} />
        </View>
        
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

  Header:{
    backgroundColor:'#b9ba33',
    flex: 0.30,
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
