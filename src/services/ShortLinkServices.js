import {api_bitly} from '../config/axios';
export default {
  /**
   * @param {string} link 
   */
  async createShortLink(link){
    const {data} = await api_bitly.post('/shorten',{long_url:link});

    return data;
  }
}