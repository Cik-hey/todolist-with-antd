import axios from "axios";

const api = axios.create({
    baseURL: "https://6322c43ea624bced307e1f72.mockapi.io/api",
});

export function getTodoList(){
    //return a promise with api result
    return api.get("/todos");
}
