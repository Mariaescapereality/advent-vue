// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getSurprises = async () => {
  const response = await api.get('/surprises');
  return response.data;
};
