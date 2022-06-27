import React, { Component } from 'react';
import evoli from './Data/Eevee.mp4';

class Evoli extends Component{
    // affiche la video de Evoli
    constructor(props){
        super(props);
        this.state={
            retour : this.props.retour,
            clics : this.props.clics
        }
    }

    render(){

        var nb=0; // compte le nombre de clic sur cete video
        // clics represente tous les noms de la bdd
        this.state.clics.forEach(element => {
            if(element.nom === "evoli")
                nb++;
        });
        
        return <div>
            <div className='nbClic'>{nb}</div>
            <button className='retour' onClick={this.state.retour}>Retour</button>
            <video src={evoli} autoPlay loop></video>
        </div>

        
    }

}

export default Evoli;