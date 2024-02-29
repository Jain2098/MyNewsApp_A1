import axios from 'axios';

const key = '538a3db968da90e1e8ea6704665e5da2'
const url = 'https://gnews.io/api/v4'

const Api = async (endpoint = "/") => {
    let final_url = `${url}${endpoint}&apikey=${key}`;
    console.log(final_url)
    const response = await axios.get(final_url);
    const api_response = await response.data;
    return api_response;
}

export default Api;
