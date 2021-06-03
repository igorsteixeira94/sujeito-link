import axios from 'axios';
import {ENDPOINT_BITLY} from '../constants/ENDPOINTS';
import {TOKEN} from '../../env';


const api_bitly = axios.create({
  baseURL:ENDPOINT_BITLY,
  headers:{
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export {api_bitly};
