import React, { Component } from 'react';
import Navbar from "../../components/UI/NavBar/NavBar";
import {Switch, Route} from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Parc from "./Parc/Parc";

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <Navbar />
                    <Switch>
                        <Route path="/contact" exact  render={() => <h1>page de contact</h1>} />
                        <Route path="/" exact render={() => <Accueil />} />
                        <Route path="/parc" exact render={() => <Parc />} />
                        <Route render={() => <Error type="404">la page n'existe pas</Error>} />
                        
                    </Switch>
                </div>
                <div className="minSite"></div>
                <Footer />
            </>
        );
    }
}

export default Site;