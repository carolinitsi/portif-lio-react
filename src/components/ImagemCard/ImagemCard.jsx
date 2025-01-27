import React from "react";
import programamina from '../../assets/imagens/programamina.gif';
import viagens from '../../assets/imagens/viagens.gif';
import dark from '../../assets/imagens/dark.gif';
import api from '../../assets/imagens/rickandmorty.gif';
import calculando from '../../assets/imagens/calculando.PNG';
import form from '../../assets/imagens/form.gif';
import blog from '../../assets/imagens/blog.gif';


const ImagemCard = ({imagem}) => {

    const renderImage = () => {
        switch(imagem) {
  
          case "programamina":   return <img src={programamina}/>;
          case "api":   return <img src={api}/>;
          case "viagens": return <img src={viagens}/>;
          case "dark":  return <img src={dark}/>;
          case "calculando":  return <img src={calculando}/>;
          case "form":  return <img src={form}/>;
          case "blog": return < img src={blog}/>
  
          default:      return <h1>No project match</h1>
        }
      }

    return (
        <>{ renderImage() }</>        
    );

}

export default ImagemCard;