import React from 'react';
import { Container } from 'react-bootstrap';
import CssInfantis from '../AtracoesInfantis.css';
import CriancaFoto from '../img/CriançaGratis.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Card(){
    return(
       <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        </Container>
    )
}