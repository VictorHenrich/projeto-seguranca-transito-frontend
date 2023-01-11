import Axios, { AxiosInstance } from 'axios';


export default class ApiFactory{

    static create(): AxiosInstance{
        return Axios.create({
            baseURL: "http://localhost:33333"
        });
    }
}