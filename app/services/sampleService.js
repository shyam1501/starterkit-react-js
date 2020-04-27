import axios from 'axios';
import { SERVER_API } from "../constants/apis";

export default {
    postAuth: payload => axios.post(`${SERVER_API}/login`, payload),
    getUsers: () => axios.get(`${SERVER_API}/users`)
};
