const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="todos-container">
      <div className="title">{props.title}</div>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}

      <hr />
    </div>
  );
};

export default Todo;
