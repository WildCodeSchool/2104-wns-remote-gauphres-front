import styled from 'styled-components';
import { colors, fonts } from '../../style/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    border: 1px solid ${colors.light};
    max-width: 50%;
    margin: auto;
    border-radius: 1em;
`;

export const BubbleMessage = styled.div`
    background-color: ${colors.purple};
    color: #fff;
    border-radius: 1em;
    padding: 1em;
    margin: 0.5em 1em 0.5em 1em;
    font-family: ${fonts.text};
    font-weight: bold;
    align-self: flex-start; //TODO ajouter la condition pour utilisateur en flex-end
`;
