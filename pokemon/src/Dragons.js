import React, { Component } from 'react';
import dragon from './Data/Dragons.mp4';

class Dragons extends Component{
    // lance la video des dragons
    constructor(props){
        super(props);
        this.state={
            retour : this.props.retour,
            clics : this.props.clics
        }
    }

    render(){

        var nb =0; // compte le nombre de clics sur la video
        this.state.clics.forEach(element => {
            if(element.nom === "dragons")
                nb++;
        });

        return <div>
            <div className='nbClic'>{nb}</div>
            <button className='retour' onClick={this.state.retour}>Retour</button>
            <video src={dragon} autoPlay loop></video>
        </div>
    }
}

export default Dragons;