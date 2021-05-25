import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
// import css from '../index.css';
import Header from './Header';
import Footer from './Footer';




export default function Servicos() {
  return (
    <View style={styles.container}>
      <Header></Header>
      
        <View style={styles.Sectionteste1}>
            <View style={styles.Section}>

                <Text style={styles.textTitle}>
                    GUARDADERO
                </Text>
                <Text>
                Para sua comodidade, o Hopi Hari disponibiliza o serviço de guarda-volumes pelo 
                valor de R$ 30 (armário pequeno) e R$ 35 (armário grande). Dessa forma você pode se divertir 
                sem se preocupar com seus pertences. O Guardadero fica localizado na entrada do parque, na região de Kaminda Mundi.
                </Text>

                <Text style={styles.textTitle}>
                    SPO
                </Text>
                <Text>
                Serviço de Proteção Operacional, com monitores em todas as áreas do parque.
                </Text>

                <Text style={styles.textTitle}>
                    SAV
                </Text>
                <Text>
                Serviço de Atendimento ao Visitante, que também contempla achados e perdidos e fica ao lado esquerdo do Kastel di Lendas, na região de Infantasia.
                </Text>

                <Text style={styles.textTitle}>
                    RENTA KARRIN
                </Text>
                <Text>
                Aqui você pode alugar um carrinho de bebê para passear com seu filho no 
                País Mais Divertido do Mundo com muito conforto. No mesmo local, também oferecemos aluguel de carrinho elétrico, além de cadeiras de roda manuais. Este último serviço é gratuito, 
                
                pois queremos que nossos visitantes tenham a melhor experiência possível.</Text>

                <Text style={styles.textTitle}>
                    ENFERMERIA
                </Text>
                <Text>
                Ambulatório completo em Infantasia.</Text>

                <Text style={styles.textTitle}>
                    AGUEROS
                </Text>
                <Text>
                Bebedouros em todas as regiões do parque.</Text>

                <Text style={styles.textTitle}>
                    BANHEIROS
                </Text>
                <Text>
                Sanitários em todas as regiões do parque.</Text>

                <Text style={styles.textTitle}>
                    TROKADERO
                </Text>
                <Text>
                Fraldário em todas as regiões do parque.</Text>

                <Text style={styles.textTitle}>
                    DESCANSAKÍ
                </Text>
                <Text>
                Salas de descanso destinadas a guias e edukadores nas regiões de Kaminda Mundi e Wild West, 
                mediante credenciamento prévio no balcão Indikamentu, localizado ao lado direito das catracas.</Text>

                <Text style={styles.textTitle}>
                PARADERO
                </Text>
                <Text>
                Estacionamento para 5 mil veículos: R$ 40 carros e vans; R$ 25 motos. 
                O ticket de estacionamento deve ser pago na tiketeria do parque ou em uma de nossas casas de câmbio, 
                conhecidas como Troka Plakas e localizadas nas regiões de Kaminda Mundi, Wild West e Mistieri.</Text>

                <Text style={styles.textTitle}>
                MAMADERO
                </Text>
                <Text>
                Local especialmente montado para mamães e papais cuidarem de seus bebês, na região de Infantasia.</Text>
                
                

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
