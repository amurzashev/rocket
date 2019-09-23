import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.form`
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  appearance: none;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  padding: 0;
  font-family: Roboto;
  font-size: 18px;
`;

const SubmitButton = styled.button`

`;

const SearchBar = ({ onSubmit }) => (
  <Wrapper onSubmit={onSubmit}>
    <SearchInput placeholder="Start typing" autoFocus />
  </Wrapper>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
