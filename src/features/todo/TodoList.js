import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodoList } from "../../api/todos";
import { initData } from "./todoSlice";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./TodoItem.css";

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);

    useEffect(() => {
        getTodoList().then((res) => {
         dispatch(initData(res.data))
        })
     }, [dispatch])

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
  