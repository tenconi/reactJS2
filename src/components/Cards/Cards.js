import React from 'react';
import './Cards.css'

export const Cards =()=> {

    return(
        <div className="Card">
            <p className="cardCategory">Electricidad</p>
            <div className="cardImg">
                <img src="./img/electriTest.jpg" alt="Servicio"/>
            </div>
            <h2 className="cardTittle">Carlitos Electricidad</h2>
            <p className="cardDescription">Esto e suna descripción del servicio</p>

            <button>Click Me <i className="icon-paper-plane"></i></button>

        </div>
    )
}