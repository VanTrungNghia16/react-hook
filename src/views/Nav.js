import {Link, NavLink} from 'react-router-dom'
import './Nav.scss';

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/" exact>Home</NavLink>
      <NavLink to="/timer">Timer</NavLink>
      <NavLink to="/todo">Todo Apps</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

export default Nav;
