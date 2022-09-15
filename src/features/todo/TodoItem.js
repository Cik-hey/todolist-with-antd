import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo,updateTodo } from "./todoSlice";
import { deleteTodoItem, toggleTodoItem, updateTodoItem } from "../../api/todos";
import { useState } from "react";
import { Modal,Input } from 'antd';
import "./TodoItem.css";

const TodoItem = (props) =>  {
    const { todo } = props;
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDelete = () => {
        deleteTodoItem(todo.id).then(() => {
          dispatch(deleteTodo(todo.id));
        });
    };

    const onToggle = () => {
        toggleTodoItem(todo.id, !todo.done).then(() => {
          dispatch(toggleTodo(todo.id));
        })
    };

      const showUpdateModal = () => {
        setTodoText(todo.text);
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        const todoItems = { id: todo.id, text: todoText };
        updateTodoItem(todo.id, todoText).then(() => {
          dispatch(updateTodo(todoItems));
        })

        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const onTodoTextChange = (event) => {
        setTodoText(event.target.value);
    };

  return (
    <div className="task-item">

      <span className={todo.done ? "done" : ""}  onClick={onToggle}>{todo.text}</span>
      <span className="times" onClick={onDelete}>&times;</span>
      <span className="times" onClick={showUpdateModal}>&radic;</span>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input defaultValue={todoText} onChange={onTodoTextChange} allowClear />
        {/* <input type="text" placeholder="input your todo" value={todoText} onChange={onTodoTextChange} /> */}
      </Modal>

    </div>
    )
};

export default TodoItem
