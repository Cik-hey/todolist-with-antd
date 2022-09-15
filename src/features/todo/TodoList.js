import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./TodoItem.css";

const TodoList = () => {
    const todoList = useSelector((state) => state.todoList);
    console.log(todoList);
    return (
    <>  
        <div class="container">
            <h1>To-Do Tasks</h1> 
            <TodoGroup todoList = {todoList} />
            <TodoGenerator />
        </div>
    </>
    )
  };
  
  export default TodoList;
  