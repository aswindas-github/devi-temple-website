import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7276299679165!2d75.81186167481195!3d11.235105888942943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b5e5c035387%3A0x5ee84168b69aa58!2sSree%20kunnath%20bagavathi%20temble!5e1!3m2!1sen!2sin!4v1735623521673!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Temple Location"
        ></iframe>

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
