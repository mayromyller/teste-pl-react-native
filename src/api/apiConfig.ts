import axios from 'axios';

const URL = 'https://randomuser.me/';

export const api = axios.create({
  baseURL: URL,
});
