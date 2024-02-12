import React, { Component } from 'react';

import '../../css/SubComponentsCSS/NoteTaker.css';
import { Link } from 'react-router-dom';

function handleSaveButton() {
  alert(
    'you are that of what you create for the rest of your life and the next one ... '
  );
}

export default function NoteTaker() {
  return (
    <div id='whole_thing'>
      <h1>NoteTaker</h1>
      <h3>
        This functions alot like a diary but with a twist, your notes are kept
        only in your computer and you won't have to worry about other's
        accessing it.
      </h3>
      <Link to={'/create_entry'}>
        <button className='entry_option'> New Entry</button>
      </Link>
      <br />
      <Link to={'/view_entry'}>
        <button className='entry_option'> View Entries</button>
      </Link>
    </div>
  );
}
