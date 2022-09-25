import axios from "axios";

export async function getData(gen, nat) {
    const res = await axios.get(`https://randomuser.me/api/?results=15&gender=${gen}&nat=${nat}`)
    return res.data.results
}