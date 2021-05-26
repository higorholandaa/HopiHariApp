import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Carousel } from 'react-native';
import {Link} from 'react-router-dom';
import css from '../index.css';
import Header from './Header';
import Footer from './Footer';




export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>

      <View style={styles.Sectionteste1}>
        <View style={styles.Section}>
          <View style={{flexDirection:'row', marginBottom:'1rem'}}>
            <img  style={{height:'2.5rem'}} src={require('../img/TicketIcon.png')} />
            <Text style={styles.textComprar}> COMPRE SEU {'\n'} PASSAPORTE!</Text>
            <TouchableOpacity style={styles.btnComprar}> 
              <Text style={styles.textBtnComprar}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuSection}>
              <Link to="/AtracoesInfantis">
              <TouchableOpacity style={styles.btnMenu}> 
                <img  style={{height:'3rem', width:'3rem'}} src={require('../img/AtracoesIcon.png')} />
                <Text style={styles.TextMenu}>Atrações</Text>
              </TouchableOpacity>
              </Link>
              <Link to="/servicos">
              <TouchableOpacity style={styles.btnMenu}> 
                <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/ServiceIcon.png')} />
                <Text style={styles.TextMenu}>Serviços</Text>
              </TouchableOpacity>
              </Link>

              <TouchableOpacity style={styles.btnMenu}> 
                <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/DuvidaIcon.png')} />
                <Text style={styles.TextMenu}>Duvidas</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.MenuSection}>
            <Link to="/HopiNiver">
              <TouchableOpacity style={styles.btnMenu}> 
                <img  style={{height:'3rem' , width:'3rem'}} src={require('../img/HopiNiverIcon.png')} />
                <Text style={styles.TextMenu}>Hopi Niver</Text>
              </TouchableOpacity>
            </Link>

            <Link to="/Gastronomia">
              <TouchableOpacity > 
                <img  style={{height:'3rem' , width:'3rem', marginLeft:'13px'}} src={require('../img/GatronomiaIcon.png')} />
                <Text style={styles.TextMenu}>Gastronomia</Text>
              </TouchableOpacity>
            </Link>  
              
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
    backgroundColor:'#fff',
    borderRadius:'2rem',
    width:'22rem',
    height:'16rem',
  },

  Sectionteste1:{
    justifyContent:'center',
    alignItems:'center'
  },

  MenuSection:{
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
  },
});
