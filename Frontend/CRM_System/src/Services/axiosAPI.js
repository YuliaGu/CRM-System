import axios from "axios"

export function apiPost(route = "", body = {}) {
    return axios.post("http://localhost:3002/" + route, body)
    // return axios.post("http://localhost:3002/" + route, body, { withCredentials: true })
}

export function apiFetch(route = "") {
    return axios.get("http://localhost:3002/" + route, { withCredentials: true })
    // return axios.get("http://localhost:3002/" + route, { withCredentials: true })
}

export async function isLoggedIn() {
    const response = await apiFetch("auth/is-logged-in")
    const loggedIn = response.data
    return loggedIn
}