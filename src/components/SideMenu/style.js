import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

// eslint-disable-next-line import/prefer-default-export
export const Menu = styled.div`
    flex-direction: column;
    background-color: ${colors.white};
    border: 1px solid ${colors.light};
    max-width: 50%;
    margin: auto;
    margin-top: 1em;
    border-radius: 1em;
`;
