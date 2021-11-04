//imrc = para comoponente en clase ---nos da la posibilidad de importar el react component

import { Component } from 'react';

const TitleComponent = ({name, extraComponent})=>{//componente tipo Funcion
     
        return <div>

            <h1>Hola {name}</h1> {/*recibo nombre*/}
            {extraComponent}
        </div>;
    }

 
export default TitleComponent;
