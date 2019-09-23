import React from 'react';
import Page from '../../templates/Page';
import SearchBar from '../../molecules/SearchBar';

export default () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('hi');
  };
  const searchBarProps = {
    onSubmit,
  };
  return (
    <Page full padding>
      <SearchBar {...searchBarProps} />
      search page
    </Page>
  );
};
