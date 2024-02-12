import React from 'react';
import '../css/ToDo.css';
import Createlist from './SubComponents/CreateList';
import ViewList from './SubComponents/ViewList';
import { Link } from 'react-router-dom';

export function ToDo() {
  return (
    <div id='whole_thing'>
      <h1> To-Do-List</h1>
      <p>
        This to do list is built to keep old lists stored whenever you need them
        with the date of today...
      </p>

      <Link to='/create_list'>
        <button className='list_option'>Create List</button>
      </Link>

      <Link to='/view_list'>
        <button className='list_option'> View List</button>
      </Link>
    </div>
  );
}
