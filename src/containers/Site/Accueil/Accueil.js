import React, {Component} from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import banderole from "../../../assets/images/banderole.png"
import logo from "../../../assets/images/logo.png";


class Accueil extends Component {
        componentDidMount = () => {
            document.title = "parc d'animaux Myzoo";
        }
        render() {
            return (
                <div>
                    <img src={banderole} alt="banderole" className="img-fluid"/>
                        <TitreH1 bgColor="bg-success">visiter le parc d'animaux myzoo</TitreH1>
                    <div className="container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                            animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                            recusandae quae!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                            animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                            recusandae quae!
                        </p>
                        <div className="row no-gutters align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={logo} alt="logo de site" className="img-fluid"/>
                            </div>
                            <div className="col-12 col-md-6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                                animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                                recusandae quae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                                animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                                recusandae quae!
                            </div>
                            <div className="col-12 col-md-6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                                animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                                recusandae quae!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus porro molestiae fugit ipsam
                                animi veritatis fugiat minus autem laboriosam? Aliquam quidem commodi dignissimos eius, dolores facere omnis
                                recusandae quae!
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={logo} alt="logo de site" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            );
        }
}
export  default Accueil;