import axios from 'axios';

export const AxiosInstance=axios.create({
    baseURL:'https://api.pexels.com/',
    timeout:5000,
    headers:{
        'Content-type':'application/json; charset=UTF-8',
        'Authorization':'563492ad6f91700001000001c8d9d74632b34b58b67dc1a107c0b957'
    }
})