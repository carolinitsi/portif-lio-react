import styled from 'styled-components';
import {colors} from '../../styles/Variaveis';

export const Container = styled.header`
    width: 100vw;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px #e1e1e1;
    top:0px;
`;

export const Navigation = styled.nav` 
    display: flex;

    li {
        padding: 8px;
        cursor: pointer;
        text-align: center;
        margin: 8px 0 8px 0;
    }

    li:first-child {
        border-right: solid 1px #c203325c;
    }
    
    a {
        display: block;
        position: relative;
        padding: 0.2em 0;
    }

    /* Fade in */
    a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #C20332;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    }

    a:hover::after,
    a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
    }

    /* Slide in */
    li a {
    overflow: hidden;
    }

    li a::after {
    opacity 1;
    transform: translate3d(-100%, 0, 0);
    }

    li a:hover::after,
    li a:focus::after{
    transform: translate3d(0, 0, 0);
    }

    }

    @media (min-width: 768px) {
        li {
            margin: 8px 30px;
        }
    }

`;