import axios from 'axios'

const instance = axios.create({
    baseURL: `https://api.airtable.com/v0/`,
});

export default instance;