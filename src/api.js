import axios from 'axios';

const baseUrl = 'http://93.183.72.61:3003';

export async function login(username, password) {
    try {
        const response = await axios.post(`${baseUrl}/login`, {
            login: username,
            password: password
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
export async function sendAnswers(answers,id) {
    try {
        const response = await axios.post(`${baseUrl}/quiz/${id}/answer`, {
            "answers": answers
        });
        return response;
    } catch (error) {
        throw error.response;
    }
}

export async function register(username, password) {
    try {
        const response = await axios.post(`${baseUrl}/register`, {
            login: username,
            password: password
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function logout() {
    try {
        const response = await axios.get(`${baseUrl}/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
export async function getUser() {
    try {
        const response = await axios.get(`${baseUrl}/get-user`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
export async function getUsers() {
    try {
        const response = await axios.get(`${baseUrl}/get-users`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function getQuizzes() {
    try {
        const response = await axios.get(`${baseUrl}/quiz`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
export async function getQuizById(id) {
    try {
        const response = await axios.get(`${baseUrl}/quiz/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}