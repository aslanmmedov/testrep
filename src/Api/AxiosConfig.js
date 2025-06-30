import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: "https://nihadrs-001-site1.jtempurl.com/api",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export default axiosConfig;