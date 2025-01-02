import React from 'react';
import './Deities.css';

function Deities() {
  const deities = [
    { name: "Lord Shiva", description: "Presiding deity of the temple, worshipped in the form of Shivalinga." },
    { name: "Goddess Parvati", description: "Consort of Lord Shiva, the goddess of fertility, love, and devotion." },
    { name: "Lord Ganapathi", description: "The remover of obstacles, worshipped for wisdom and prosperity." },
    { name: "Lord Subramanya", description: "Son of Shiva and Parvati, worshipped as the god of war and victory." },
  ];

  return (
    <div className="deities-container">
      <h2 className="deities-title">Deities</h2>
      <ul className="deities-list">
        {deities.map((deity, index) => (
          <li key={index} className="deity-item">
            <h3>{deity.name}</h3>
            <p>{deity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deities;
