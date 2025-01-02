import React from 'react';
import './Announcements.css';

function Announcements() {
  return (
    <div className="announcements-container">
      <h2 className="announcements-title">Announcements</h2>
      <ul className="announcements-list">
        <li>Temple will be closed on certain days for maintenance.</li>
        <li>Special pooja on the first Monday of every month.</li>
        <li>Devotees are requested to follow COVID-19 guidelines.</li>
      </ul>
    </div>
  );
}

export default Announcements;
