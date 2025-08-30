import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-bold text-light">
          SWEET & SPRINKLED
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Items</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}