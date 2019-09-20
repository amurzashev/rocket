import React, { useEffect } from 'react';
import Page from '../../templates/Page';
import { feedAction } from '../../../actions';
// match.params.id

export default (props) => {
  useEffect(() => {
    // should find pic or not
    console.log(props)
  }, []);
  return (
    <Page full padding>
      pic
    </Page>
  );
};
