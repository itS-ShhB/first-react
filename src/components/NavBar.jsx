import "./NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="header">
        <div className="containerList">
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>
    </>
  );
}
