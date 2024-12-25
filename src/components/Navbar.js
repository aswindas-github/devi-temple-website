import React from 'react';
import { Link,useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Kunnath Sree Bhagavathy Kshethram</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/about', '/events', '/services', '/contact', '/gallery'].map((path, idx) => (
              <li key={idx} className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  to={path}
                >
                  {path.slice(1).charAt(0).toUpperCase() + path.slice(2) || 'Home'}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;