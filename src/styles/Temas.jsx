import styled from 'styled-components';
import {
    Background_Light,
    Background_Dark,
    text_Ligth,
    text_Dark,
    colors,
} from './Variaveis';

export const ButtonTheme = styled.button` 
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        width:100px;
        right:10px;
        display:flex;
        align-items: center;
        font-size:12px;

        img {
            width: 30px;
            z-index: 9;

            @media (max-width: 768px) {
                top: 20px;
            }
        }
`;

export const temaClaro = {
    body:Background_Light,
    text:text_Ligth,
    shadow: colors.shadowLight,
}

export const temaEscuro = {
    body:Background_Dark,
    text:text_Dark,
    shadow: colors.shadowDark,
}