import React, {Component} from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import Animal from "./Animal/Animal";
import Bouton from "../../../components/UI/Bouton/Bouton"


class Parc extends Component {
        state = {
            animaux : null,
            filtreFamille : null,
            filtreContinent : null,
            listeFamilles : null,
            listeContinents : null
        }

        loadData = () => {
            const famille = this.state.filtreFamille ? this.state.filtreFamille : "-1"
            const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1"

            axios.get(`http://localhost/SEVEURANIMAUX/front/animaux/${famille}/${continent}`)
                .then(reponse => {
                    this.setState({animaux:Object.values(reponse.data)})
                })

        }

        componentDidMount = () => {
            this.loadData();
            axios.get(`http://localhost/SEVEURANIMAUX/front/familles`)
            .then(reponse => {
                this.setState({listeFamilles:Object.values(reponse.data)})
            })
            axios.get(`http://localhost/SEVEURANIMAUX/front/continents`)
            .then(reponse => {
                this.setState({listeContinents:Object.values(reponse.data)})
            })
        }

        componentDidUpdate = (oldProps, oldState) => {
            if (oldProps.fitlreFamille !== this.state.filtreFamille || oldProps.fitlreCotinent !== this.state.fitlreCotinent ) {
                this.loadData();
            }
           
        }

        handleSelectionFamille = (famille_id) => {
         if(famille_id === "-1") this.handleResetFamille()
          else this.setState({filtreFamille : famille_id})
        }

        handleSelectionContinent = (continent_id) => {
            if(continent_id === "-1") this.handleResetContinent()
            else this.setState({filtreContinent : continent_id})
          }
          handleResetFamille = () => {
            this.setState({filtreFamille : null})
          }
          handleResetContinent = () => {
            this.setState({filtreContinent : null})
          }
          handleAniaml

        render() {
    
            let nomFamilleFiltre="";
            if(this.state.filtreFamille){
                const numCaseFiltreFamille = this.state.listeFamilles.findIndex(famille => {
                    return this.famille.famille_id === this.state.filtreFamille;
                })

                nomFamilleFiltre = this.state.listeFamilles[numCaseFiltreFamille].famille_libelle
            }
            let nomContinentFiltre="";
            if(this.state.filtreContinent){
                const numCaseFiltreContinent = this.state.listeContinents.findIndex(continent => {
                    return this.continent.continent_id === this.state.filtreContinent;
                })

                nomContinentFiltre = this.state.listeContinents[numCaseFiltreContinent].continent_libelle
            }
            return (
                <>
                     <TitreH1 bgColor="bg-success">les animaux du parc</TitreH1>
                     
                         <div className="container-fluid">
                            <span>Filtre : </span>
                            <select onChange={(event) => {this.handleSelectionFamille(event.target.value)}}>
                                <option value="-1" selected={this.state.filtreFamille===null && "selected"}>Familles</option>
                                { 

                                    this.state.listeFamilles && this.state.listeFamilles.map(famille => {
                                        return <option 
                                            value={famille.famille_id}
                                            key={famille.famille_id}
                                            selected={this.state.filtreFamille===famille.famille_id && "selected"}
                                            >{famille.famille_libelle}</option>

                                    })
                                }
                            </select>

                            {
                                this.state.filtreFamille &&
                                <Bouton 
                                    typeBtn = "btn-secondary"
                                    clic = {this.handleResetFamille}
                                >
                                    {nomFamilleFiltre} &nbsp;
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                    </svg>
                                    
                                </Bouton>
                            }
                            <select onChange={(event) => {this.handleSelectionContinent(event.target.value)}}>
                                <option value="-1" selected={this.state.filtreContinent===null && "selected"}>Continents</option>
                                { 

                                    this.state.listeContinents && this.state.listeContinents.map(continent => {
                                        return <option 
                                            value={continent.continent_id}
                                            key={continent.continent_id}
                                            selected={this.state.filtreContinent === continent.continent_id && "selected"}
                                            >{continent.continent_libelle}</option>

                                    })
                                }
                            </select>
                         </div>
                     
                     {
                        this.state.filtreContinent &&
                        <Bouton 
                            typeBtn = "btn-secondary"
                            clic = {this.handleResetContinent}
                        >
                            {nomContinentFiltre} &nbsp;
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </Bouton>
                     }
                    <div className="container-fluid">
                    <div className="row no-gutters">
                        {
                            this.state.animaux &&
                            this.state.animaux.map(animal => {
                                return (
                                    <div className=" col-12 col-md-6 col-xl-4" key={animal.animal_id}>
                                        <Animal 
                                            {...animal} 
                                            filtreFamille = {this.handleSelectionFamille} 
                                            filtreContinent = {this.handleSelectionContinent} 

                                        />
                                    </div>
                                    )
                            })
                        }
                    </div>
                        
                    </div>
                </>  
            );
        }
}
export  default Parc;