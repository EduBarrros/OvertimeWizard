import axios from "axios";

const GovApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api/',
    headers: {'Cache-Control': 'no-cache'}
});

export default GovApi;