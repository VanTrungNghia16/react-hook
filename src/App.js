import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav.js";
import Todo from "./views/Todo.js";
import Covid from "./views/Covid.js";

const App = () => {
  let [name, setName] = useState("Neil"); // => Set varible name = 'Neil'
  let [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Doing homework", type: "neil" },
    { id: "todo2", title: "Playing games", type: "neil" },
    { id: "todo3", title: "Using facebook", type: "hoidanit" },
    { id: "todo4", title: "Reading books", type: "hoidanit" },
  ]);

  const handleClickButton = () => {
    if (!address) {
      alert("Input empty");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1001),
      title: address,
      type: "neil",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  // didmount
  useEffect(() => {
    // console.log("run useEffect");


  },[address]);

  // re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with react hook with {name}</h1>
        
        <Covid />
        {/* <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.type === "neil")}
          title={`Neil's todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={() => handleClickButton()}>
          Click me
        </button> */}
      </header>
    </div>
  );
};

export default App;
