import axios from 'axios';
import { config } from '../../config';

export const createOrder = async payload => {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    
    return await axios.post(`${config.api_host}/api/orders`, payload, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export async function getInvoiceByOrderId(order_Id) {
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    return await axios.get(`${config.api_host}/api/invoices/${order_Id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export async function getOrders() {
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    return await axios.get(`${config.api_host}/api/orders?limit=`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}