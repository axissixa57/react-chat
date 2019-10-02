import axios from 'axios';

axios.defaults.baseURL = window.location.origin; // из url берём адрес http://localhost:3000
axios.defaults.headers.common["token"] = window.localStorage.token;

window.axios = axios;

export default axios;