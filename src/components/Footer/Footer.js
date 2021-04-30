import React from "react";
import fb from "../../assets/images/footer/fb.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";
import {NavLink} from "react-router-dom";
import classes from "./Footer.module.css";

const footer = (props) => (
    <>
        <footer  className="bg-primary">
            <div className="text-white text-center">Myzoo - tout droits réservés</div>
            <div className="row no-gutters align-items-center  pt-2">
                <div className="col-3">
                   <a href="www.aljazeera.net" className="d-block" target="_blank">
                        <img src={fb} alt="facebook" className="imgFacebook"/>
                   </a> 
                </div>
                <div className="col-3">
                   <a href="www.aljazeera.net" className="d-block" target="_blank">
                        <img src={twitter} alt="twitter" className="imgTwitter"/>
                   </a> 
                </div>
                <div className="col-3">
                   <a href="www.aljazeera.net" className="d-block" target="_blank">
                        <img src={youtube} alt="facebook" className="imgYoutube"/>
                   </a> 
                </div>
                <div className="col-3">
                    <NavLink to="/mentionLegales" className={["nav-link", "p-0", "m-0", classes.p_textColor].join(" ")} >Mentions Légales</NavLink> 
                    <a href="mailto:contact@hotmail.com" className={["nav-link", "p-0", "m-0", classes.p_textColor].join(" ")}>contact@hotmail.com</a>
                </div>
            </div>
        </footer>
    </>
)
export default footer;