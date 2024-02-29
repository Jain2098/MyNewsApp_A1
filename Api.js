import axios from 'axios';
import ApiKey from './ApiKey';

// Make sure you replace with your own API key
// const ApiKey = '5304665e5da2'
const key = ApiKey;
const url = 'https://gnews.io/api/v4';

const Api = async (endpoint = "/") => {
    let final_url = `${url}${endpoint}&apikey=${key}`;
    console.log(final_url)
    const response = await axios.get(final_url);
    const api_response = await response.data;
    return api_response;
}

export default Api;
