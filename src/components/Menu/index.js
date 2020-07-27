import React from "react";
import Logo from "../../assets/Logo.png"
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>
            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;