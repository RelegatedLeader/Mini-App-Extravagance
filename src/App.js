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
import Learn_the_brain from './components/Learn_the_brain';
import Beginner_lesson from './components/Learn_the_brain/Beginner_lesson';
import Intermediate_lesson from './components/Learn_the_brain/Intermediate_lesson';
import Experienced_lesson from './components/Learn_the_brain/Experienced_lesson';

const Home = () => <h2>Home Page</h2>;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='brain_experienced_lesson'
            element={<Experienced_lesson />}
          ></Route>
          <Route
            path='brain_intermediate_lesson'
            element={<Intermediate_lesson />}
          ></Route>
          <Route
            path='brain_beginner_lesson'
            element={<Beginner_lesson />}
          ></Route>
          <Route path='learn_the_brain' element={<Learn_the_brain />}></Route>
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
