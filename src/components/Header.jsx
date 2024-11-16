import { Link } from "react-router-dom";
import "../assets/css/components/Header.css";
function Header() {
  return (
    //  need to create a function to check if they are authenticated which means logged in is true
    <header className="d-b-flex">
      {/* if they are not logged in */}
      <h4>
        <Link to="/">LOGO</Link>
      </h4>
      <menu className="d-e-flex">
        <li>Pricing</li>
        <li>Solutions</li>
        <li>Community</li>
        <li>Resources</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="auth-btn">Sign In</button>
        </li>
        <li>
          <button>Join</button>
        </li>
      </menu>
      {/* if they are logged in */}
      <menu className="hide">
        <li>Home</li>
        <li>Zoos</li>
        <li>Community</li>
        <li>Search</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="auth-btn">Logout</button>
        </li>
      </menu>
    </header>
  );
}
export default Header;
