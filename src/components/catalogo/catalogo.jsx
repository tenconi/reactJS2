import { Component } from 'react';
import TitleComponent from './componenteclase/title.jsx'


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Daniel'
         }
    }
    render() { 
        return ( 
            <div>
                <TitleComponent name={this.state.name} />{/*Esto es un PROPS - Title hereda a traves del props el state*/}

            </div>
         );
    }
}
 
export default Catalogo;