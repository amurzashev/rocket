import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Page from '../../templates/Page';
import Gallery from '../../molecules/Gallery';
import getItem from './utils';

const Image = ({ feed, match }) => {
  const item = getItem(feed.items, match.params.id);
  return (
    <Page full padding>
      <Helmet title={item.user.name} />
      <Gallery single items={[item]} link={false} />
    </Page>
  );
};

Image.propTypes = {
  feed: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
const mapStateToProps = ({ feed }) => ({ feed });
export default connect(mapStateToProps)(Image);
