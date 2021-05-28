import styled from 'styled-components';
import { colors, fonts } from '../../style/theme';

export const Article = styled.div`
    background-color: ${colors.white};
    width: 250px;
    height: 300px;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    font-family: ${fonts.text};
    margin: 2em 0 0 1em;
    padding: 1em;
    text-align: center;
`;

export const Img = styled.img`
    border-radius: 7px 7px 0 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: auto;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-auto-rows: minmax(200px, auto);
`;

export const MainWrapper = styled.div`
    grid-column-start: 1;
`;

export const RightWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
`;

export default {};
