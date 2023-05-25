import './NavBar.css'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <>
      <header className="header">
        <div className="containerList">
          <ul className="list">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>
    </>
  );
}
