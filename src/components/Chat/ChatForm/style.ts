import styled from 'styled-components';
import { colors, fonts } from '../../style/theme';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    flex-direction: column;
    background-color: ${colors.white};
    max-width: 60%;
    margin-top: 1em;
    border-radius: 1em;
`;

export const Form = styled.div`
    border: none;
    display: flex;
    flex-direction: row;
    .input {
        border: none;
        width: 80%;
        padding: 1em;
        align-self: start;
        min-height: 100%;
        font-family: ${fonts.text};
        &:focus {
            outline: none;
        }
    }
    .button {
        background-color: ${colors.purple};
        color: ${colors.white};
        border-radius: 1em;
        border: none;
        padding: 1em 3em 1em 3em;
        font-family: ${fonts.text};
        font-weight: bold;
        font-size: 1em;
        margin: 1em;
        width: 20%;
        &:focus {
            outline: none;
        }
        &:hover {
            background-color: ${colors.darkPurple};
        }
    }
`;
