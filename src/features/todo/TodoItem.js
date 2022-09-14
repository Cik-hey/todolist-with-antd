const TodoItem = (props) =>  {
    const { todo } = props;
    //event handler
  return <div>
    <span>{todo.text}</span>
    <span>&times;</span>
    </div>
};

export default TodoItem
