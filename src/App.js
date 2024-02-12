import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import MainMenu from './components/MainMenu';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import { ToDo } from './components/ToDo';
import Createlist from './components/SubComponents/CreateList';
import ViewList from './components/SubComponents/ViewList';
import NoteTaker from './components/SubComponents/NoteTaker';
import ViewEntry from './components/SubComponents/ViewEntry';
import CreateEntry from './components/SubComponents/CreateEntry';
import ChatApp from './components/ChatApp';

const Home = () => <h2>Home Page</h2>;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='chat_app' element={<ChatApp />}></Route>
          <Route path='create_entry' element={<CreateEntry />}></Route>
          <Route path='view_entry' element={<ViewEntry />}></Route>
          <Route path='create_list' element={<Createlist />}></Route>
          <Route path='view_list' element={<ViewList />}></Route>
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/musicplayer' element={<MusicPlayer />} />
          <Route path='/super_todo_list' element={<ToDo />} />
          <Route path='/notetaker' element={<NoteTaker />} />
          <Route path='/' element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
