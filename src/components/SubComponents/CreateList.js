import React, { useState } from 'react';
import '../../css/SubComponentsCSS/CreateList.css';

export default function CreateList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [listName, setListName] = useState('');

  const getCurrentDateTime = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return `${date} ${time}`;
  };

  const handleTaskButton = () => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask('');
    setShowCheckbox(true);
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedTasks = [...selectedTasks];
    updatedSelectedTasks[index] = !updatedSelectedTasks[index];
    setSelectedTasks(updatedSelectedTasks);
  };

  const handleDeleteSelected = () => {
    const updatedTasks = tasks.filter((_, index) => !selectedTasks[index]);
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  const handleSaveList = () => {
    // Save tasks and list details to local storage
    const savedLists = JSON.parse(localStorage.getItem('savedLists')) || [];
    const newList = {
      date: getCurrentDateTime(),
      name: listName,
      tasks: tasks.slice(),
    };
    savedLists.push(newList);
    localStorage.setItem('savedLists', JSON.stringify(savedLists));
  };

  return (
    <div id='whole_thing'>
      <h1>Enter a task, choose whether to save it or not...</h1>
      <input
        placeholder='Enter a task here'
        id='current_task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id='add_task_button' onClick={handleTaskButton}>
        Add Task
      </button>
      <br />

      {showCheckbox && (
        <div id='checkbox_popup'>
          <ul>
            {tasks.map((taskItem, index) => (
              <li key={index}>
                <input
                  type='checkbox'
                  value={taskItem}
                  checked={selectedTasks[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                {taskItem}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handleDeleteSelected} id='delete_list_button'>
              Delete Selected
            </button>
            <input
              type='text'
              placeholder='Enter list name'
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
            <button onClick={handleSaveList} id='save_list_button'>
              Save List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
