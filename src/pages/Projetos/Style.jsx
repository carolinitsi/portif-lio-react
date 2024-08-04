import styled from 'styled-components';
import {colors} from '../../styles/Variaveis';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    max-width: 100%;
    padding:30px;
    margin: 0 auto;

    @media (min-width: 768px) {
            max-width: 1024px;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
`;

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    height: 430px;
    box-shadow: 0px 5px 10px #e1e1e1;
    margin: 10px;
    font-size: 14px;
    text-align: center;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
            max-width: 300px;

        }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 100%;
    padding:30px;

    h1{
        font-size: 16px;
    }

`;

export const ContainerTec = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    li {
        border-radius: 20px;
        padding: 8px;
        margin: 4px;
        color: #ffffff;
        font-weight: 700;
        background-color: ${colors.red};
    }

`;