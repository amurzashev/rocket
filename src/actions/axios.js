/* eslint-disable import/prefer-default-export */
import axios from 'axios';

let API_URL;

if (process.env.NODE_ENV !== 'development') {
  API_URL = 'https://rocket-firm-unsplash-server.herokuapp.com/api/v1/';
} else {
  API_URL = 'http://localhost:3000/api/v1/';
}

export const apiRequest = axios.create({
  baseURL: API_URL,
});
