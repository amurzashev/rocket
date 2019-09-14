import styled from '@emotion/styled';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(${props => Math.round(props.grid / 2)}, 30vw);
  grid-gap: 40px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);    
    grid-template-rows: repeat(${props => Math.round(props.grid)}, 50vw);
  }
`;
