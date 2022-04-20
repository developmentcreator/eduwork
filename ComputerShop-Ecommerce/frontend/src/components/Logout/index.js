import axios from 'axios';


export default {
    logout() {
        return axios.post('localhost:3000/api/auth/logout');
    }
}