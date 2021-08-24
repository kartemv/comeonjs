import axios from 'axios';

const getGamesList = () => axios.get('/games');

const getCategories = () => axios.get('/categories');


export {
  getGamesList,
  getCategories,
};

