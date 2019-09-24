import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { connect } from 'react-redux';
import Page from '../../templates/Page';
import Gallery from '../../molecules/Gallery';
import getItem from './utils';
import { feedAction } from '../../../actions';

const Image = ({ feed, match, shouldLoadImage }) => {
  useEffect(() => {
    shouldLoadImage(match.params.id);
  }, []);
  const item = getItem(feed.items, match.params.id);
  if (_.isEmpty(item)) return null;
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
  shouldLoadImage: PropTypes.func.isRequired,
};
const mapStateToProps = ({ feed }) => ({ feed });
const mapDispatchToProps = {
  shouldLoadImage: feedAction.shouldLoadImage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Image);
