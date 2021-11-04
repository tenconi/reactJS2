import './ItemListContainer.css'

import React, { Component } from 'react'

export default class ItemListContainer extends React.Component {
    
    render() {
        console.log(this);

        return (
            <div className="list">
                <p>Hola <strong>{this.props.name}</strong></p>
            </div>
        )
    }
}



