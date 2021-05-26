import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-dom';
// import css from '../index.css';
import Header from './Header';
import Footer from './Footer';




export default function Duvidas() {
  return (
    <View style={styles.container}>
      <Header></Header>
      
        <View style={styles.Sectionteste1}>
            <View style={styles.Section}>

                <Text style={styles.textTitle}>
                    Endereço
                </Text>
                <Text>
                O Hopi Hari é um dos maiores parques temáticos da América Latina e está localizado a 15 minutos de Campinas e a meia hora de São Paulo, na Rodovia dos Bandeirantes, km 72, em Vinhedo, interior paulista. CEP: 13013-082.

                </Text>

                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>

                <Text style={styles.textTitle}>
                    Dinheiro no Hopi Hari
                </Text>
                <Text>
                Todos os pontos de alimentos e bebidas do nosso País, incluindo as lojas de souvenirs, aceitam pagamentos com cartão de crédito ou débito. Para utilizar dinheiro físico é necessário realizar a troca dele por nossa moeda, a Hopi Plaka. Esta troca pode ser feita em qualquer uma de nossas casas de câmbio distribuídas pelo parque e conhecidas como Troka Plakas. Você vai receber um cartão magnético e irá carregá-lo com o valor que quiser. Caso não utilize todo o saldo, poderá solicitar o reembolso no final do dia. Vale ressaltar que não aceitamos vales refeição e nem alimentação.
                </Text>

                <Text style={styles.textTitle}>
                    Excursões escolares e grupos
                </Text>
                <Text>
                Para organizar uma excursão escolar, envie email para: excursao@hopiharicorp.com.br com os seguintes dados: nome, idade, cidade, telefone e o total de pessoas que você quer trazer ao País Mais Divertido do Mundo. Se for excursão de grupos, entre em contato com nossa Central de Vendas: (11) 4210-4000. Sua solicitação será encaminhada para o distribuidor autorizado da sua região.</Text>

                <Text style={styles.textTitle}>
                    Agências de turismo
                </Text>
                <Text>
                Se você representa alguma agência de turismo e quer mais informações sobre como organizar uma viagem até o País Mais Divertido do Mundo, envie email para nosso Konsulado: konsulado@hopiharicorp.com.br. Te retornaremos o mais rápido possível.</Text>

                <Text style={styles.textTitle}>
                    Aniversariantes
                </Text>
                <Text>
                Aniversariante acompanhado de um pagante do valor integral do Passaporti Uni entra de graça no País Mais Divertido do Mundo até 7 dias antes ou 7 dias depois da data do aniversário. Basta trazer um documento oficial com foto no dia da visita para comprovar a data de nascimento. Esta promoção não é válida para eventos especiais e exclusivos, e também não é cumulativa com outras promoções.</Text>

                <Text style={styles.textTitle}>
                    Eventos empresariais
                </Text>
                <Text>
                Para realizar o evento da sua empresa no Hopi Hari, envie email para: eventos@hopiharicorp.com.br.</Text>

                <Text style={styles.textTitle}>
                    Menores de idade
                </Text>
                <Text>
                O Hopi Hari aconselha que menores de idade sempre venham ao País Mais Divertido do Mundo acompanhados de um adulto. Caso não haja esta possibilidade, no dia da visita será necessário trazer uma declaração escrita pelo responsável legal..</Text>

                <Text style={styles.textTitle}>
                    Alimentos e bebidas
                </Text>
                <Text>
                Nosso País possui 21 pontos de alimentos e bebidas distribuídos por todo o parque, incluindo carnes nobres e até comida vegana. Todo o nosso cardápio passa por uma rigorosa inspeção e acompanhamento de nutricionista.</Text>

                <Text style={styles.textTitle}>
                    Se chover durante a visita
                </Text>
                <Text>
                O Hopi Hari não se responsabiliza por fenômenos da natureza, como chuva e frio, por exemplo. Portanto, não devolvemos o valor do seu passaporti nesses casos. Vale lembrar que podem existir paradas técnicas de algumas atrações para manutenção ou teste em caso de chuvas intensas, raios e ventos fortes.</Text>

                <Text style={styles.textTitle}>
                    VIP Pass
                </Text>
                <Text>
                Nosso País tem alvará para receber até 26 mil pessoas por dia. No entanto, para evitar filas longas, a capacidade diária foi reduzida para até 15 mil visitantes. Mas, se mesmo assim você não quiser enfrentar filas em nossas atrações, recomendamos o crachá VIP Pass, que pode ser adquirido exclusivamente no parque. O VIP Pass é um serviço limitado e está sujeito à disponibilidade, consulte mais informações na VIP Pass Shopi, localizada na entrada da Giranda Mundi, no dia de sua visita.</Text>
                
                <Text style={styles.textTitle}>
                    Não é permitido levar ao parque
                </Text>
                <Text>  
                    <ul>
                        <li>
                            Bolsa térmica grande, isopor, cooler ou qualquer tipo de utensílio de armazenamento, cantis, panelas e similares
                        </li> <br />
                        <li>
                            Embalagens de vidro, incluindo perfumes, tintas, desodorante spray ou aerosol e protetor solar spray ou aerosol;
                        </li>
                        <br />
                        <li>
                        Instrumentos de prática violenta, pontiagudos, perfurantes, cortantes (exemplos: tesouras, estiletes, facas, canivetes e similares) e armas de fogo;
                        </li> <br /><br />
                        <li>
                            Substâncias ilícitas, bem como produtos para seu uso/consumo (exemplos: drogas ilícitas e similares;
                        </li> <br />
                        <li>
                            Bebidas alcoólicas ou não alcoólicas sem seus respectivos lacres;
                        </li> <br />
                        <li>
                            Animais de estimação, exceto cão-guia;
                        </li> <br />
                        <li>
                            Alimentos perecíveis no geral, tais como sanduíches caseiros, alimentos que precisam de aquecimento e similares;
                        </li> <br />
                        <li>
                            Guarda-chuva de qualquer tamanho;
                        </li> <br />
                        <li>
                            Fogos de artifício e de estampido (de qualquer espécie);
                        </li> <br />
                        <li>
                            Remédios sem autorização ou receita médica;
                        </li> <br />
                        <li>
                            Bandeiras e balões;
                        </li> <br />
                        <li> Notebooks e similares (exceto celulares); </li> <br />
                        <li> Equipamentos fotográficos e de vídeo profissionais (exceto câmeras de qualquer natureza e uma lente fixada no corpo da mesma), como tripés, monopod, bastão extensor, rebatedores, flash externo, iluminação em geral, drones e similares; </li> <br />
                        <li> Visitantes com máscaras ou capacetes, exceto se a máscara for de proteção. </li> <br />
                    </ul>
                </Text>  
    
                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>

                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>

                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>

                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>

                <Text style={styles.textTitle}>
                    Acesso
                </Text>
                <Text>
                O passaporti é válido para uma única entrada no Hopi Hari no dia da sua visita. Ao sair do parque, o retorno será permitido somente mediante a compra de outro passaporti.
                </Text>
                

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
