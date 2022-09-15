import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";
import { toggleTodo } from "./todoSlice";
import "./TodoItem.css";

const TodoItem = (props) =>  {
    const { todo } = props;
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
    };
    const onToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    let myPromise = new Promise(function(myResolve, myReject) {
        if (todo.done === true) {
          myResolve("todo.done is true");
        } else {
          myReject("todo.done is false");
        }
      });

      myPromise.then(
        function(value) {
            console.log(value);},
        function(error) {
            console.log(error);}
      );

  return (
    <div className="task-item" onClick={onToggle}>
    <span className={todo.done ? "done" : ""}>{todo.text}</span>
    <span className="times" onClick={onDelete}>&times;</span>
    </div>
    )
};

export default TodoItem
