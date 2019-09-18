/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/';

export const apiRequest = axios.create({
  baseURL: API_URL,
});
