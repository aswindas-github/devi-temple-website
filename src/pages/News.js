import React from 'react';
import './News.css';

function News() {
  const newsItems = [
    {
      id: 1,
      title: "Special Maha Shivratri Celebration",
      date: "February 28, 2025",
      description: "Join us for the grand Maha Shivratri celebration with special poojas, cultural programs, and prasadam distribution.",
    },
    {
      id: 2,
      title: "Renovation Work Completed",
      date: "January 15, 2025",
      description: "We are pleased to announce the completion of the temple renovation. Devotees are welcome to visit and witness the new facilities.",
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      date: "December 25, 2024",
      description: "A blood donation camp will be held on the temple premises in collaboration with the local health authorities.",
    },
  ];

  return (
    <div className="news-container">
      <h2 className="news-title">Latest News</h2>
      <ul className="news-list">
        {newsItems.map((item) => (
          <li key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
