import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Thumb from '../../atoms/Thumb';

const ParentGalleryWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Gallery = ({ items }) => {
  if (!items.length) return null;
  return (
    <ParentGalleryWrap>
      {items.map(pic => <Thumb item={pic} key={pic.id} />)}
    </ParentGalleryWrap>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
export default Gallery;
