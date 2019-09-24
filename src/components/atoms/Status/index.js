import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Caption from '../Caption';
import {
  READY_STATUS_AWAIT,
  READY_STATUS_ERROR,
  READY_STATUS_LOADING,
} from '../../../actions/types';

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = ({ status, caption }) => {
  const readableStatus = {
    [READY_STATUS_AWAIT]: 'Awaiting',
    [READY_STATUS_ERROR]: 'Error',
    [READY_STATUS_LOADING]: 'Loading',
  };
  return (
    <Wrapper>
      <Caption size="m">{readableStatus[status] || caption}</Caption>
    </Wrapper>
  );
};

Status.propTypes = {
  caption: PropTypes.string,
  status: PropTypes.string,
};
Status.defaultProps = {
  caption: '',
  status: '',
};
export default Status;
