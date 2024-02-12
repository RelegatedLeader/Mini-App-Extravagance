import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MainMenu.css';

const MainMenu = () => {
  return (
    <div id='whole_thing'>
      <img
        src='/imgs/mini_app_extragance_logo.png'
        alt='mini_app_extravagance_logo'
      />
      <h1>
        NOTE TO SELF - DESING YOUR OWN DEV NOTES THAT APPEARS ON THE TOP RIGHT
      </h1>
      <Link to='/calculator'>
        <button className='option'> Calculator</button>
      </Link>
      <Link to='/musicplayer'>
        <button className='option'>Music Player</button>
      </Link>
      <Link to='/super_todo_list'>
        <button className='option'> To-Do List Extravagance</button>
      </Link>

      <Link to='/notetaker'>
        <button className='option'>NoteTaker</button>
      </Link>
      <Link to='/chat_app'>
        <button className='option'> ChatApp</button>
      </Link>
    </div>
  );
};

export default MainMenu;
