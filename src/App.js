import logo from "./logo.svg";
import "./App.scss";
import Nav from './views/Nav.js';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with react hook</h1>
      </header>
    </div>
  );
}

export default App;
