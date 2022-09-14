import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    // useSelector((state) => {
    //     return state.todoList;
    // });
    const todoList = useSelector((state) => state.todoList);
    console.log(todoList);

    return (
    <>
        <TodoGroup todoList = {todoList} />
        <TodoGenerator />
    </>
    )
  };
  
  export default TodoList;
  