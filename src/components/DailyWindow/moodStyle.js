import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

const SmallCard = styled.div`
    background-color: ${colors.darkPurple};
    color: ${colors.yellow};
    font-weight: 700;
    width: 100px;
    height: 100px;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    font-family: ${fonts.text};
    margin: 2em 0 0 2em;
    padding: 2em;
    text-align: center;
`;

export default SmallCard;
