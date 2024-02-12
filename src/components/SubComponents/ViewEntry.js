import React, { useState, useEffect } from 'react';

export default function ViewEntry() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
    setEntries(savedEntries);
  }, []);

  return (
    <div id='whole_thing'>
      <h1>Entries</h1>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <p>Date: {entry.date}</p>
            <p>Name: {entry.name}</p>
            <p>Entry: {entry.entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
