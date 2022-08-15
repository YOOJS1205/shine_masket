import axios from 'axios';

export const customAuthAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
});
