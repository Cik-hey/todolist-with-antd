import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";


const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    };
    const onAdd = () => {
        // console.log("save the data to global store");
        dispatch(addTodo(todoText));
        setTodoText("");
    }
  return (
    <div>
      <input type="text" placeholder="input your todo" value={todoText} onChange={onTodoTextChange} />
      <button onClick={onAdd}>Add</button>

    </div>
  )
};

export default TodoGenerator;