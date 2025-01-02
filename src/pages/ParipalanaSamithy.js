import React from 'react';
import './ParipalanaSamithy.css';

function ParipalanaSamithy() {
  const committeeMembers = [
    { name: "Shri Ramesh Menon", position: "President", contact: "9447001122" },
    { name: "Shri Mohan Kumar", position: "Secretary", contact: "9447203344" },
    { name: "Shri Biju Nair", position: "Treasurer", contact: "9447335566" },
    { name: "Shri Rajeev Pillai", position: "Vice President", contact: "9447407788" },
    { name: "Shri Suresh Nambiar", position: "Joint Secretary", contact: "9447509900" },
  ];

  return (
    <div className="committee-container">
      <h2 className="committee-title">Paripalana Samithy</h2>
      <table className="committee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {committeeMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.position}</td>
              <td>{member.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParipalanaSamithy;
