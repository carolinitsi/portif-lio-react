import React from "react";

import {Container,ContainerText, Card,ContainerTec} from './Style';
import {Dados} from '../../Dados';
import ImagemCard from '../../components/ImagemCard/ImagemCard';



const Projetos = ({theme}) => {

    return (
        
        <Container>
            { Dados.map((item) => (
                <Card className="card" target="_blank" href={item.link}>
                <ImagemCard imagem={item.img}/>
                <ContainerText>
                    <h1>{item.titulo}</h1>
                    <p>{item.descrição}</p>
                    <ContainerTec>
                        {item.tecnologias.map((tecnologias) => (
                            <li>{tecnologias}</li>
                        ))}
                    </ContainerTec>
                </ContainerText>
            </Card>  
            ))}
        </Container>
    );

}

export default Projetos;