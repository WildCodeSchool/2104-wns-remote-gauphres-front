import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

export const Card = styled.div`
    background-color: ${colors.white};
    width: 350px;
    height: 400px;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${fonts.text};
    margin: 2em;
    padding: 0.5em;
    text-align: center;

    * {
        margin: 0;
    }
`;

type IsLoggedIconProps = { isConnected: boolean };
export const Img = styled.img<IsLoggedIconProps>`
    width: 110px;
    height: 110px;
    margin: 10px;
    border: 5px solid ${(props) => (props.isConnected ? 'green' : 'red')};
    border-radius: 50%;
`;

export const HobbiesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    * {
        margin: 5px;
    }
`;
