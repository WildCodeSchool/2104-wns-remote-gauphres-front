/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colors } from './components/style/theme';

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.light};
    min-height: 100vh;
`;
