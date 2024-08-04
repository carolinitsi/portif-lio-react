import styled from 'styled-components';
import {colors} from '../../styles/Variaveis';

export const Container = styled.div`
    background-color: #444242;
    color: ${colors.white};
    height:30px;
    padding:5px;
    text-align:center;
    position: fixed;
    bottom: 0px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    font-size: 11px;

    @media (min-width: 768px) {
        font-size: 14px;

    }

    li {
        display: flex;
        align-items: center;
    }

    li p {
        margin: 3px
    }

    li img {
        width:14px;

        @media (min-width: 768px) {
            font-size: 20px;
        }
    }
`;
