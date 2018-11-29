import axios from 'axios';

const agent = axios.create({
baseURL: 'https://api.unsplash.com',
headers: { Authorization: 'Client-ID 0275a3352e6b6cd49beb90a9de3ccd69aa4c73d8c7f9d7f07e6cd3131dda698a' },

});

export default agent;
