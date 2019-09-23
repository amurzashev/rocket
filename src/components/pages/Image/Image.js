import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/Page';
import Gallery from '../../molecules/Gallery';
// import { feedAction } from '../../../actions';

const Image = ({ location }) => {
  const { item } = location.state;
  return (
    <Page full padding>
      <Gallery single items={[item]} link={false} />
    </Page>
  );
};

Image.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({}),
    }).isRequired,
  }),
};
Image.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({}),
    }),
  }),
};
export default Image;
