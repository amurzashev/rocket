import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Thumb from '../../atoms/Thumb';

const ParentGalleryWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const GalleryWrap = styled.div`
  width: 100%;
  background: #eee;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const Gallery = ({ items }) => {
  if (!items.length) return null;
  return (
    <ParentGalleryWrap>
      <GalleryWrap>
        {items.map(pic => <Thumb item={pic} key={pic.id} />)}
      </GalleryWrap>
    </ParentGalleryWrap>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
export default Gallery;
