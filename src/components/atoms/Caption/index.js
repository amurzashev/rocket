import styled from '@emotion/styled';

const getFontSize = size => {
  switch (size) {
    case 's':
      return 16;
    case 'm':
      return 18;
    default:
      return 18;
  }
};

export default styled.p`
  display: ${props => (props.inline ? 'inline' : 'block')};
  font-size: ${props => getFontSize(props.size)}px;
  font-weight: ${props => (props.bold ? 700 : 400)};
  font-family: Roboto;
  margin: ${props => props.margin};
`;
