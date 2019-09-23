import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { READY_STATUS_LOADING } from '../../../actions/types';
import Page from '../../templates/Page';
import { feedAction } from '../../../actions';
import Gallery from '../../molecules/Gallery';
import Status from '../../atoms/Status';

const Home = ({ feed, shouldLoadFeed }) => {
  useEffect(() => {
    shouldLoadFeed();
  }, []);
  return (
    <Page full padding>
      {
        feed.readyStatus === READY_STATUS_LOADING
          ? <Status status="Loading" />
          : <Gallery items={[...feed.items]} link />
      }
    </Page>
  );
};

Home.propTypes = {
  shouldLoadFeed: PropTypes.func.isRequired,
  feed: PropTypes.shape({
    readyStatus: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({ feed: state.feed });
const mapDispatchToProps = {
  shouldLoadFeed: feedAction.shouldLoadFeed,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);