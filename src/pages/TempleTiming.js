import React from 'react';
import './TempleTiming.css';

function TempleTiming() {
  const timings = [
    { day: "Monday to Friday", time: "5:00 AM - 12:00 PM, 5:00 PM - 8:00 PM" },
    { day: "Saturday and Sunday", time: "5:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
    { day: "Special Days and Festivals", time: "4:30 AM - 1:00 PM, 4:30 PM - 9:30 PM" },
  ];

  return (
    <div className="timing-container">
      <h2 className="timing-title">Temple Timings</h2>
      <ul className="timing-list">
        {timings.map((timing, index) => (
          <li key={index} className="timing-item">
            <strong>{timing.day}</strong>: {timing.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TempleTiming;
