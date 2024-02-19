import React, { Component } from 'react';

import '../css/Learn_the_brain.css';
import { Link } from 'react-router-dom';
//the idea of this mini app is to teach the basics of the brain, but also teach more as time progresses ,
//lets start with a basic app, have a button of options -> you will have to begin creating folders
//for subcomponents of specific things in order to be more organized

//for now there will be a beginner level, intermediate and Experienced Level

//we will work on the beginner level for now, when the user clicks on this option, the user will be taken to more
//options where the user can decide what to do with the knowledge they want to acquire or had acquired
//The options will be Let's begin (green button), then the 3 levels, (beginner, intermediate and experienced)
//the beginner option will have The lecture, the quiz and a test with open ended questions.
//i want to work with the creativity within your brain , therefore i didnt plan for any of this ,
//i just want to see what you can do with your brain,
//create the point system, and offer a very unique reward if they pass the quiz,
//the user can only acceess the test + 5 questions compared to 10, where the 5 questions are open ended
//where the user can only get a grade based on those 10 questions
//later on we will have a log in system for this , but for now, make the app function

export default function Learn_the_brain() {
  return (
    <div id='whole_thing'>
      <h1>Brain</h1>

      <h3>
        What is your level of knowledge of the brain and the subconscious?
      </h3>

      <Link to='/brain_beginner_lesson'>
        <button className='level_option'>Beginner</button>
      </Link>
      <br />
      <Link to='/brain_intermediate_lesson'>
        <button className='level_option'>Intermediate</button>
      </Link>

      <br />
      <Link to='/brain_experienced_lesson'>
        <button className='level_option'>Experienced</button>
      </Link>
    </div>
  );
}

//here is what youll need section - this can be deleted
//alright , you'll have to create a page for a quiz, the test and lesson itself, these will need to be
//linked in the App.js , make sure to create the JS files first as you will need it
//place the files for this in its own folder, its time to be more organized...
//the lecture can be chat gpt along with the questions, the open ended questions can be yours for the test
//but the test is locked (won't be shown) or will be gray and then green until you pass the test
//perhaps you'll neeed a flag for it
//you dont need the let's begin button, fuck that , waste of file
