import axios from 'axios';

export const AxiosInstance=axios.create({
    baseURL:'http://localhost:5678/api/',
    timeout:5000,
    headers:{
        'Content-type':'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'u-sec':'ueuryerewurewryuew-43243-43',
        'Authorization':`Bearer ${window.sessionStorage.getItem('token')}`
    }
})

export const AxiosInstanceFormData = axios.create({
    baseURL: 'http://localhost:5678/api/',
    timeout: 100000,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'u-sec':'ueuryerewurewryuew-43243-43',
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${window.sessionStorage.getItem('token')}`
    }
})

export function imageFullPath(path){
    return `http://localhost:5678/public/uploads/images/category/${path}`;
}