import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Thumb from '../../atoms/Thumb';

const ParentGalleryWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Gallery = ({
  items,
  link,
  single,
}) => {
  if (single) {
    return (
      <ParentGalleryWrap>
        <Thumb link={link} item={items[0]} />
      </ParentGalleryWrap>
    );
  }
  if (!items.length) return null;
  return (
    <ParentGalleryWrap>
      {items.map(pic => <Thumb item={pic} key={pic.id} link={link} />)}
    </ParentGalleryWrap>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  link: PropTypes.bool,
  single: PropTypes.bool,
};
Gallery.defaultProps = {
  link: false,
  single: false,
};
export default Gallery;
