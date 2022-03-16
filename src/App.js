import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav.js";
import Todo from "./views/Todo.js";

const App = () => {
  let [name, setName] = useState("Neil");
  let [address, setAddress] = useState("");
  let [todos, setTodos] = useState([
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
    let newTodo = { id: "abc", title: address, type: "neil" };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  // re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with react hook with {name}</h1>
        <Todo todos={todos} title={"All todos"} />
        <Todo
          todos={todos.filter((item) => item.type === "neil")}
          title={`Neil's todos`}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={() => handleClickButton()}>
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
