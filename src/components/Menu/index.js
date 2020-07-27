import React from "react";
import Logo from "../../assets/Logo.png"
import "./Menu.css";
import Button from "../Button";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;