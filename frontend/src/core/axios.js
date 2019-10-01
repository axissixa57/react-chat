import axios from 'axios';

axios.defaults.baseURL = window.location.origin; // из url берём адрес http://localhost:3000

export default axios;