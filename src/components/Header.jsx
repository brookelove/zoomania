import "../assets/css/components/Header.css";
function Header() {
  return (
    //  need to create a function to check if they are authenticated which means logged in is true
    <header className="d-b-flex">
      {/* if they are not logged in */}
      <h4>Logo</h4>
      <menu className="d-e-flex">
        <li>Pricing</li>
        <li>Solutions</li>
        <li>Community</li>
        <li>Resources</li>
        <li>Contact</li>
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button>Register</button>
        </li>
      </menu>
      {/* if they are logged in */}
      <menu className="hide">
        <li>Home</li>
        <li>Zoos</li>
        <li>Community</li>
        <li>Search</li>
        <li>Contact</li>
        <li>
          <button>Logout</button>
        </li>
      </menu>
    </header>
  );
}
export default Header;
