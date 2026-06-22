import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Router Task</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;