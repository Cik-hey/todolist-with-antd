import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";
import { toggleTodo } from "./todoSlice";
import "./TodoItem.css";

const TodoItem = (props) =>  {
    const { todo } = props;
    //event handler
    //dispatch(deleteTodo(todo.id))
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
    };
    const onToggle = () => {
        dispatch(toggleTodo(todo.id));
    };
  return <div className="task-item" onClick={onToggle}>
    <span className={todo.done ? "done" : ""}>{todo.text}</span>
    <span className="times" onClick={onDelete}>&times;</span>
    </div>
};

export default TodoItem
