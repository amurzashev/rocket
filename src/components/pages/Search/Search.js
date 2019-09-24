import React, { useState } from 'react';
import Page from '../../templates/Page';
import Status from '../../atoms/Status';
import SearchBar from '../../molecules/SearchBar';
import Gallery from '../../molecules/Gallery';
import {
  READY_STATUS_AWAIT,
  READY_STATUS_LOADING,
  READY_STATUS_ERROR,
  READY_STATUS_SUCCESS,
} from '../../../actions/types';
import { apiRequest } from '../../../actions/axios';

export default () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(READY_STATUS_AWAIT);
  const onSubmit = e => {
    e.preventDefault();
    setStatus(READY_STATUS_LOADING);
    apiRequest.get(`search/${value}`)
      .then(response => {
        console.log(response.data);
        setStatus(READY_STATUS_SUCCESS);
        setItems(response.data.items);
      })
      .catch(() => {
        setStatus(READY_STATUS_ERROR);
      });
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  const searchBarProps = {
    onSubmit,
    onChange,
    value,
  };
  return (
    <Page full padding>
      <SearchBar {...searchBarProps} />
      <Status status={status} />
      { status === READY_STATUS_SUCCESS && <Gallery items={items} link />}
      { (status === READY_STATUS_SUCCESS && !items.length) && <Status caption="Nothing found🥺" /> }
    </Page>
  );
};
