import React from 'react';
import CssInfantis from '../AtracoesInfantis.css';
import EuroRestaurandi from '../img/Euro-Restaurandi.jpg';




export default function CardGastronomia(){
    return(
       <div id="cont-fit">
            <div>
               <img id="Foto-fit" src={EuroRestaurandi}>
               </img>
           </div>

           <div id="text-fit">
               <h2>EURO RESTAURANDI</h2>
                    <p>Restaurante com culinária premium<br></br>
            <strong>Localizado em:</strong> Kaminda Mundi</p>
           </div>
       </div>
    )
}