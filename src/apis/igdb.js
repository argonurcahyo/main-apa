import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const TOKEN = process.env.REACT_APP_IGDB_TOKEN
const baseUrl = 'https://api.igdb.com/v4/';

const igdb = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Client-ID": CLIENT_ID,
        "Access-Control-Allow-Origin": "*"
    }
})

export default igdb