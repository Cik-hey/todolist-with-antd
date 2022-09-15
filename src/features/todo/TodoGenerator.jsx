import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../api/todos";
import { addTodo } from "./todoSlice";


const TodoGenerator = () => {

    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    };

    const onAdd = () => {
      const todo = { text: todoText, done: false };
        addTodoItem(todo).then((res) => {
          dispatch(addTodo(res.data));
          setTodoText("");
        });
    }

  return (
    <div>
      <label>To-Do:</label><br/>
      <input type="text" placeholder="input your todo" value={todoText} onChange={onTodoTextChange} />
      <button onClick={onAdd}>Add</button>
    </div>
  )

};

export default TodoGenerator;