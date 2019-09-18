import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { feedAction } from '../../../actions';
import Page from '../../templates/Page';

const Home = ({ bindFeedActionLoadFeed, feed }) => {
  useEffect(() => {
    bindFeedActionLoadFeed();
  }, []);
  console.log(feed);
  return (
    <Page full padding>
      <h1>home page</h1>
    </Page>
  );
};

Home.propTypes = {
  bindFeedActionLoadFeed: PropTypes.func.isRequired,
  feed: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({ feed: state.feed });
const mapDispatchToProps = {
  bindFeedActionLoadFeed: feedAction.loadFeed,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
