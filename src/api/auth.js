import axios from 'axios';

async function register(request) {
    const {data} = await axios.post("/register", request);

    return data;
}

async function login(request) {
    const {data} = await axios.post("/login", request);

    return data;
}

async function logout() {
    const {data} = await axios.post("/logout");

    return data;
}

export default {
    register,
    login,
    logout,
};