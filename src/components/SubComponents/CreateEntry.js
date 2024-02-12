import React, { useState } from 'react';

export default function CreateEntry() {
  const styles = {
    entry_box: {
      width: '60%', // Adjust the width as needed
      height: '70px',
    },
    save_button: {
      width: '40%',
      height: '90%',
    },
  };

  const [entry, setEntry] = useState('');
  const [entryName, setEntryName] = useState('');
  const [entryExists, setEntryExists] = useState(false);

  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  const getCurrentDateTime = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return `${date} ${time}`;
  };

  const handleCreateEntryButton = () => {
    const savedEntries = JSON.parse(localStorage.getItem('savedLists')) || [];
    const newEntry = {
      date: getCurrentDateTime(),
      name: entryName,
      entry: entry,
    };
    savedEntries.push(newEntry);
    localStorage.setItem('savedEntries', JSON.stringify(savedEntries));
    if (entry) {
      setEntryExists(true);

      if (entryExists) {
        setEntry('');
        setEntryName('');
      }
    }
  };

  return (
    <div id='whole_thing'>
      <h1>New Entry</h1>

      <textarea
        style={styles.entry_box}
        id='entry_box'
        placeholder='Enter entry here'
        value={entry}
        onChange={handleEntryChange}
      ></textarea>
      <br />
      <br />

      {entryExists && (
        <input
          type='text'
          placeholder='Enter entry name'
          value={entryName}
          onChange={(e) => setEntryName(e.target.value)}
        />
      )}

      <button onClick={handleCreateEntryButton} style={styles.save_button}>
        Save
      </button>
    </div>
  );
}
