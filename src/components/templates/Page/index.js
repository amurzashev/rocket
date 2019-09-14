import styled from '@emotion/styled';

export default styled.section`
  height: ${props => (props.full ? '100%' : 'initial')};
  ${props => {
    if (props.centered && props.down) {
      return `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `;
    }
    if (props.centered) {
      return `
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
    return true;
  }}
  @media only screen and (max-width: 1200px) {
    padding: ${props => (props.padding ? '60px 20px 20px 20px' : 'initial')};    
  }
  padding: ${props => (props.padding ? '60px 200px 20px 200px' : 'initial')};
`;
