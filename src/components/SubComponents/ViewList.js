import React, { useState, useEffect } from 'react';

export default function ViewList() {
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    // Load saved lists from local storage on component mount
    const lists = JSON.parse(localStorage.getItem('savedLists')) || [];
    setSavedLists(lists);
  }, []);

  const handleDeleteList = (index) => {
    const updatedLists = [...savedLists];
    updatedLists.splice(index, 1);
    setSavedLists(updatedLists);
    // Save updated lists to local storage
    localStorage.setItem('savedLists', JSON.stringify(updatedLists));
  };

  return (
    <div>
      <h1> Here are all of your lists listed by Date-Name</h1>
      <ul>
        {savedLists.map((list, index) => (
          <li key={index}>
            <p>Date and Time: {list.date}</p>
            <p>Name: {list.name}</p>
            <ul>
              {list.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
            <button onClick={() => handleDeleteList(index)}>Delete List</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// the new idea to delete each list, one must create a passcode for their username (4 digit - 6 digits) to ensure
// that they really want to delete the list
