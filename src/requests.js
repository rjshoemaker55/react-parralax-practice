const axios = require('axios');
const apiUrl = 'https://pixabay.com/api/';
import { writeFileSync, readFileSync } from 'fs';
require('dotenv').config();

export const getPhotos = () =>
  axios.get(`${apiUrl}?key=14205893-b1d30e722d6965113aee2b3cd`);
