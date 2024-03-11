// components/TenderList.js

import React from 'react';

const TenderList = ({ tenders }) => {
  return (
    <div>
      <h2>Tenders</h2>
      <ul className="list-group">
        {tenders.map((tender, index) => (
          <li key={index} className="list-group-item">
            <strong>{tender.title}</strong>
            <p>{tender.description}</p>
            <p>Deadline: {tender.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenderList;
