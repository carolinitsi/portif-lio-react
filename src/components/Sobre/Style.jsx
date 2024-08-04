import styled from 'styled-components';
import {colors} from '../../styles/Variaveis';

export const Container = styled.div`
    background-color: ${colors.red};
    color: ${colors.white};
    width:100%;
`;

export const Text = styled.div`
    max-width: 300px;
    margin:30px auto;
    padding:30px;

    @media (min-width: 768px) {
        max-width:700px;
        padding:100px;
    }
    
`;