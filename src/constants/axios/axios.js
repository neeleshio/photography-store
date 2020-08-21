import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://52.66.196.85:3000/api/'
});

export default instance;