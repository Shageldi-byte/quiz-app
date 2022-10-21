import axios from 'axios';

export const AxiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    timeout:5000,
    headers:{
        'Content-type':'application/json; charset=UTF-8'
    }
})