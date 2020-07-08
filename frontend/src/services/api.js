import axios from 'axios';
const api = axios.create({
    baseURL: 'http://appslocalhost/www/Mobile%20Apps/Talker/backend/',
})
export default api;