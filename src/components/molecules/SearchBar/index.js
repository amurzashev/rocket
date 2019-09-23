import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.form`
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
  position: relative;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  appearance: none;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  padding: 0;
  font-family: Roboto;
  font-size: 24px;
`;

const SubmitButton = styled.input`
  border: none;
  background: transparent;
  position: absolute;
  font-size: 24px;
  cursor: pointer;
  right: 30px;
`;

const SearchBar = ({ onSubmit }) => (
  <Wrapper onSubmit={onSubmit}>
    <SearchInput placeholder="Start typing" autoFocus />
    <SubmitButton value="🔎" type="submit" />
  </Wrapper>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
