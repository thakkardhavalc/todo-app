import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retriveHelloWorldBean = () => 
    apiClient.get('/hello-world-bean')


export const retriveHelloWorldPathVariable = (username) => 
    apiClient.get(`/hello-world/path-variable/${username}`, {
        headers: {
            Authorization: 'Basic aW4yOG1pbnV0ZXM6ZHVtbXk='
        }
    })

export const executeBasicAuthenticationService = (token) => 
    apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    })