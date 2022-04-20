import axios from 'axios';
import { config } from '../../config';

export const getAddress = async () => {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getLocation = async (lokasi, kodeInduk) => {
    return await axios.get(`https://regions-indonesia-api.herokuapp.com/api/regions?q=${lokasi}&parent=${kodeInduk}`);
}

export const createAddress = async (data) => {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}