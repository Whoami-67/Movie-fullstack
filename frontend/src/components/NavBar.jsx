import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className="main-header">
      <nav className="nav main-nav">
        <Link to="/home">Popular</Link>
        <Link to="/search">Search</Link>
        <button
          className="nav-button"
          onClick={Logout}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
