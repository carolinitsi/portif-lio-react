import React from "react";

import {Container,ContainerInfos} from './Style';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import me from '../../assets/imagens/me.jpeg';
import Sobre from '../../components/Sobre/Sobre';
const Me = ({theme}) => {

    return (
        <>
            <Container>
                <ContainerInfos>
                    <h1>Olá! Me chamo <span className="name">Carolini</span> e sou desenvolvedora Front-end!</h1>
                    <p>Seja bem-vindo(a) ao meu portifólio!</p>
                    <SocialIcons theme={theme}/>
                </ContainerInfos>
                <img className="me_photo" src={me}/>
            </Container>
            <Sobre/>
        </>
    );

}

export default Me;