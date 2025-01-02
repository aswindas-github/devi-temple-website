import React from 'react';
import { Link,useLocation } from 'react-router-dom';

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/announcements">Announcements</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/deities">Deities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/paripalanaSamithy">ParipalanaSamithy</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/templeRules">TempleRules</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/templeTiming">TempleTiming</Link></li>
          </ul>
          <button className="btn btn-outline-light ms-3" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;