import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        

        {/* Quick Links Section */}
        <div className="mt-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled d-flex justify-content-center flex-wrap">
            <li className="mx-3">
              <Link to="/terms" className="text-white">Terms and Conditions</Link>
            </li>
            <li className="mx-3">
              <Link to="/disclaimer" className="text-white">Disclaimer</Link>
            </li>
            <li className="mx-3">
              <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
            </li>
            <li className="mx-3">
              <Link to="/refund-policy" className="text-white">Cancellation & Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Copyright and Social Links */}
        <p className="mt-3">© 2024 Kunnath Sree Bhagavathy Kshethram | All Rights Reserved</p>
        <p>
          Follow us on{' '}
          <a
            href="https://www.facebook.com/profile.php?id=100007022838552&mibextid=ZbWKwL"
            className="text-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{' '}
          <a
            href="https://www.instagram.com/kunnathbagavathy/profilecard/?igsh=MWJlMjVkdnhobHZ0ZQ=="
            className="text-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
