import axios from "axios";

const api = axios.create({
    baseURL: "https://6322c43ea624bced307e1f72.mockapi.io/api",
});

// GET https://6322c43ea624bced307e1f72.mockapi.io/api 
export function getTodoList(){
    //return a promise with api result
    return api.get("/todos");
}
// POST https://6322c43ea624bced307e1f72.mockapi.io/api data => { text: "" }
export function addTodoItem(data) {
    return api.post("/todos", data);
}

export function deleteTodoItem(id) {
    return api.delete(`/todos/${id}`);
}

export function toggleTodoItem(id, done) {
    return api.put(`/todos/${id}`, { done: done });
}
