import React from "react";
import MoonRed from '../../assets/icons/moonRed.png';
import MoonWhite from '../../assets/icons/moonWhite.png';


const claro = <img src={MoonRed}   alt="Tema Claro" />;
const escuro = <img src={MoonWhite} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? claro : escuro);