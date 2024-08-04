import React from "react";
import {Container} from './Style';
import Inta from '../../assets/icons/insta.png';
import Gmail from '../../assets/icons/gmailWhite.png';
import Tel from '../../assets/icons/tel.png';

const Footer = () => {

    return (
        <Container>
            <li><img src={Inta}/><p>@_carolini.oliveira</p></li>
            <li><img src={Gmail}/><p>carolini.tsi@gmail.com</p></li>
            <li><img src={Tel}/><p>(53) 98464-6187</p></li>
        </Container>
    );

}

export default Footer;