import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Caption from '../Caption';

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = ({ caption }) => (
  <Wrapper>
    <Caption size="m">{caption}</Caption>
  </Wrapper>
);

Status.propTypes = {
  caption: PropTypes.string,
};
Status.defaultProps = {
  caption: 'Loading',
};
export default Status;
