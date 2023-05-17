import axios from 'axios';

export const customAuthAxios = axios.create({
  baseURL: 'https://api.mandarin.weniv.co.kr/user',
});
