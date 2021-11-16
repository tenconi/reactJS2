import { Component } from 'react';
import TitleComponent from './componenteclase/title.jsx'


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Daniel'
         }
    }


    saludar=()=>{{/*se hace con function Arrow para mantener el escope y acceder al State de la clase dentro de la funcion*/}
        console.log(`Hola ${this.state.name}`)
        this.setState({name : 'Carlos'})
    }

    render() { 
        return ( 
            <div>
                <TitleComponent name={this.state.name} />{/*Esto es un PROPS - Title hereda a traves del props el state*/}

                <button type='button' onClick={this.saludar}>Click Me</button>

            </div>
         );
    }
}
 
export default Catalogo;