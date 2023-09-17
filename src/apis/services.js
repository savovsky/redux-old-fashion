import axios from 'axios';

// const jwt = 'abc.def.ghj';
const protocol = 'https://';
const hostname = 'jsonplaceholder.typicode.com';

// Axios Instance Config options

const timeout = 10000; // 10sec
const headers = {
    // Authorization: `Bearer ${jwt}`,
    'Access-Control-Allow-Origin': `${protocol}${hostname}`,
};

const albumsApiUrl = () => {
    const pathname = '/albums';

    return `${protocol}${hostname}${pathname}`;
};

// Axios instances

const getAlbums = axios.create({
    method: 'get',
    baseURL: albumsApiUrl(),
    headers,
    timeout,
});

// const createAlbum = axios.create({
//     method: 'post',
//     baseURL: albumsApiUrl(),
//     headers,
//     timeout,
// });

// const updateAlbum = axios.create({
//     method: 'put',
//     baseURL: albumsApiUrl(),
//     headers,
//     timeout,
// });

export default {
    getAlbums,
    // createAlbum, // The body is added dynamicly within the Action
    // updateAlbum, // Path params are added dynamicly within the Action
};
