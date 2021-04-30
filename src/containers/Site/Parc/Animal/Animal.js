import React from "react";
import Bouton from "../../../../components/UI/Bouton/Bouton";


const animal = (props) => (
    <>
        <div className="card mb-3">
                <h3 className="card-header">{props.animal_id} - {props.animal_nom}</h3>
                <div className="card-body">
                    <div className="card-text">{props.animal_descrition}</div>
                </div>
                <div className="text-center" style={{"height": "100px"}}>
                    <img  src={props.animal_image} alt={props.animal_nom} className="img-fluid h-100"/> 
                </div>
                
                <div className="card-body">
                    <h3>Famille : 
                        <Bouton 
                                typeBtn="btn-primary" 
                                clic = { () => {
                                props.filtreFamille(props.famille.famille_id)
                                }}>
                                {props.famille.famille_libelle.toUpperCase()}
                        </Bouton>
                    </h3>
                    <div>{props.famille.famille_description}</div>
                </div>
                <div className="card-body">
                <h3>Continent : </h3>
                    {
                        props.continents.map(continent => {
                            let colorBtn = "";
                            switch(continent.continent_id){

                                case "1" : colorBtn = "btn-primary";
                                break;
                                case "2" : colorBtn = "btn-danger";
                                break;
                                case "3" : colorBtn = "btn-warning";
                                break;
                                case "4" : colorBtn = "btn-info";
                                break;
                                case "5" : colorBtn = "btn-success";
                                break;
                                default : colorBtn = "btn-secondary";

                            }
                                
                            return <Bouton 
                                        typeBtn={colorBtn} 
                                        css="m-1"
                                        clic = { () => {props.filtreContinent(continent.continent_id)}}
                                    >
                                        {continent.continent_libelle}
                                    </Bouton>
                        })
                    }   
                </div>
            </div>
    </> 
       
)
export  default animal;