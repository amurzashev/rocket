import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
`;

const LogoWrap = styled(Link)`
  font-size: 30px;
  text-decoration: none;
`;

export default () => (
  <NavWrap>
    <LogoWrap to="/">
      <span role="img" aria-label="homepage">
        🚀
      </span>
    </LogoWrap>
    <LogoWrap to="/search">
      <span role="img" aria-label="search">
        🔎
      </span>
    </LogoWrap>
  </NavWrap>
);
