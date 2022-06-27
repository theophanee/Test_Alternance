import React, { Component } from 'react';
import Choix from './Choix';
import Dragons from './Dragons';
import Evoli from './Evoli';
import './CSS/MainPage.css';
import axios from 'axios';

class MainPage extends Component{
    // choisi quelle page afficher
    constructor(props){
        super(props);
        this.state={
            page : "choix",
            clics : [],
            api: axios.create({ //pour interagir avec l'api
                withCredentials: true,
                baseURL:  'http://localhost:4000'
            })
        }
        this.pageChoix = this.pageChoix.bind(this);
        this.pageDragons = this.pageDragons.bind(this);
        this.pageEvoli = this.pageEvoli.bind(this);
        this.setChoix = this.setChoix.bind(this);
        this.getChoix = this.getChoix.bind(this);
    }

    pageDragons=()=>{ // pour afficher la page de dragons
        this.getChoix(); // maj du nombre de clics
        this.setState((state)=>{
            state.page = "dragons";
            return this.state;
        });
    }

    pageEvoli=()=>{ // de meme pour Evoli
        this.getChoix();
        this.setState((state)=>{
            state.page = "evoli";
            return this.state;
        });
    }

    getChoix= ()=> { // recupere les donnes de la bdd
        // pour ensuite pouvoir les parcourir et les compter
        this.state.api.get('/api/choix')
        .then((response)=>{
            this.setState((state)=>{
                state.clics = response.data;
                return this.state;
            });
        })
        .catch((err)=>{
            console.log("erreur : "+err.response.data);
        });
    }

    pageChoix = () => { // afficher la page des choix de videos
        this.getChoix();
        this.setState((state)=>{
            state.page = "choix";
            return this.state;
        })
    }

    setChoix = ( choix ) =>{ // quand on clique sur une video on affiche sa page
        // et on ajoute a la bdd son nom
        // comme si clic++
        console.log(choix);
        return new Promise(resolve =>{  
            this.state.api.post('/api/choix',{ 
                nom : choix
            })
            .then((response)=>{
                this.setState((state)=>{
                    state.page=choix;
                    return this.state;
                })
            })
            .catch((err)=>{
                console.log("erreur");
            })
        })
    }

    render(){

        let page;
        // choisit quelle page affichee
        console.log(this.state.clics);
        if(this.state.page === "dragons"){
            page = <Dragons clics={this.state.clics} retour={this.pageChoix}/>;
        }
        if(this.state.page === "evoli"){
            page = <Evoli clics={this.state.clics} retour={this.pageChoix}/>;
        }
        if(this.state.page ==="choix") {
            page = <Choix choix={this.setChoix} dragons={this.pageDragons} evoli={this.pageEvoli}/>;
        }
        return <nav>
            {page}
        </nav>
    }

}

export default MainPage;