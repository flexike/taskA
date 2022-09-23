import axios from "axios";

export async function database() {
    return axios.get('https://randomuser.me/api/?results=15')
}
