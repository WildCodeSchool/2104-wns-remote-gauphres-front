import styled from 'styled-components';

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
