import styled from '@emotion/styled';

export default styled.div`
  height: ${props => props.photo.height / 8}px;
  width: ${props => props.photo.width / 8}px;
  background-size: contain; 
`;

/*
url("${props => {
    console.log(props.photo);
    return props.photo.urls.full;
  }}");
*/
