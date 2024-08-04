import styled from 'styled-components';
import {colors} from '../../styles/Variaveis';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 100%;
    padding:30px;

    @media (min-width: 768px) {
            flex-direction: row;
            max-width: 900px;
            margin: 50px auto;

        }

    .me_photo {
        border-radius: 100%;
        width: 300px;
    }
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;

    .name {
        color: ${colors.white};
        background-color: ${colors.red};
        padding: 0 4px;
    }

    @media (min-width: 768px) {
        width: 300px;

    }
`;