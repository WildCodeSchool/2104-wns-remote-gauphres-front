import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

// eslint-disable-next-line import/prefer-default-export
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.light};
    font-family: ${fonts.title};
    font-size: 2em;
    width: 20%;
    padding: 3em 0em 2em 1em;
    a {
        text-decoration: none;
        color: #131212;
        &:hover {
            opacity: 0.8;
        }
    }
`;
