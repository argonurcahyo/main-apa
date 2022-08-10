import axios from 'axios';
import axiosRetry from 'axios-retry';

const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const TOKEN = process.env.REACT_APP_IGDB_TOKEN
const CORS_PROXY = 'https://argo-cors.herokuapp.com/'
const baseUrl = 'https://api.igdb.com/v4/';
export const BASE_IMG_URL = 'https://images.igdb.com/igdb/image/upload/t_original/'

export const categoryEnum = {
    0: 'main_game',
    1: 'dlc_addon',
    2: 'expansion',
    3: 'bundle',
    4: 'standalone_expansion',
    5: 'mod',
    6: 'episode',
    7: 'season',
    8: 'remake',
    9: 'remaster',
    10: 'expanded_game',
    11: 'port',
    12: 'fork',
}

export const statusEnum = {
    0: 'released',
    2: 'alpha',
    3: 'beta',
    4: 'early_access',
    5: 'offline',
    6: 'cancelled',
    7: 'rumored',
    8: 'delisted',
}

const igdb = axios.create({
    baseURL: `${CORS_PROXY}${baseUrl}`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Client-ID": CLIENT_ID,
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'text/plain'
    }
})

axiosRetry(igdb, {
    retries: 3,
    retryCondition: error => {
        return error.response.status === 429
    }
})


export default igdb