 import React from 'react';
//  import { Container } from 'react-bootstrap';
 import CssInfantis from '../AtracoesInfantis.css';
 import CriancaFoto from '../img/Konfronti.jpg';
//  import Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';
 import Atracoescss from '../AtracoesInfantis.css'




 export default function Card(){
     return(
        <div id="cont-fit">
            <div id="text-fit">
                Altura 0,90
                Altura Max 2,00
            </div>
            <div>
                <img id="Foto-fit" src={CriancaFoto}>
                </img>
            </div>
        </div>
     )
 }


