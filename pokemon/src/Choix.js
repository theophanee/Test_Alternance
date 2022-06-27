import React, { Component } from 'react';
import Dragons from './Data/dragons.png';
import Evoli from './Data/evoli.png';

class Choix extends Component{

    // page pour choisir quelle video lancee
    // ou alors laisse le decompte
    constructor(props){
        super(props);
        this.state={
            cpt : 6,
            dragons : this.props.dragons,
            evoli : this.props.evoli,
            setChoix : this.props.choix
        }
        this.getCpt = this.getCpt.bind(this);
        this.lancerVideoAlea = this.lancerVideoAlea.bind(this);

    }
        getCpt=()=>{// pour faire le decompte de 6sec
            if(this.state.cpt > 0){
                this.setState((state)=>{
                    state.cpt--;
                    return this.state;
                });
            }if(this.state.cpt===0){ // si decompte terminer on lance au hasard
                this.lancerVideoAlea();
            }
            
        }
    
        lancerVideoAlea=()=>{ // tire un entier 0 ou 1
            var choix = Math.floor(Math.random()*2);
            if(choix===1){
                this.state.dragons();
            }
            if(choix===0){
                this.state.evoli();
            }
        }
    
        render(){
    
            if(this.state.cpt>=0){ // timer pour faire le decompte
                setTimeout(()=>{
                    this.getCpt();
                },3000)
            }
    
            return <div>
                <body>
                    
                    <div className='compteur'>{this.state.cpt}</div>
                    
                    <div className='texte'>
                        <div>
                            Vous êtes plutôt "Les Dragons sont de retour" ou "Les Evolutions d'Evoli" ?
                        </div>
                        <div >
                            Choisissez parmi les 2 propositions
                        </div>
                    </div>
    
                    <div className='images'>
                        <button className='bD' onClick={()=>this.state.setChoix("dragons")}>
                            <img src={Dragons}/>
                        </button>
                        <button className='bE' onClick={()=>this.state.setChoix("evoli")}>
                            <img src={Evoli}/>
                        </button>
                    </div>
    
                    <div className='texteChoix'>
                        <div className='divv'>
                        <div className='divD'>Les Dragons sont de retour</div>
                        </div>
                        <div className='divv'>
                        <div className='divE'>Les Evolutions d'Evoli</div>
                        </div>
                    </div>
                </body>
            </div>
        }
}

export default Choix;