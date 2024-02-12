import React, { useEffect, useState } from 'react';
import '../css/Calculator.css'; // Make sure to import your CSS file

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplay) => prevDisplay + value);
  };

  const handleReset = () => {
    setDisplayValue('');
  };

  const handleEqual = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const absolute_zero = (value) => {
    handleButtonClick('0'); // do the 0 thing lol
    let i = value + 1; // Increment value by 1

    if (i === 32) {
      alert('absolute fucking zero');
    }
  };

  return (
    <div id='calc'>
      <h1>Personal Calculator</h1>
      <br />
      <br />
      <br />

      <div id='device_itself' className='calculator'>
        <input className='display' value={displayValue} readOnly />
        <div className='buttons'>
          <button className='number' onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className='number' onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className='number' onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className='operator' onClick={() => handleButtonClick('+')}>
            +
          </button>

          <button className='number' onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className='number' onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className='number' onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className='operator' onClick={() => handleButtonClick('-')}>
            -
          </button>

          <button className='number' onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className='number' onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className='number' onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className='operator' onClick={() => handleButtonClick('*')}>
            *
          </button>

          <button className='number' onClick={() => absolute_zero(0)}>
            0
          </button>
          <br />
          <button className='equal' onClick={handleEqual}>
            =
          </button>
          <button className='operator' onClick={() => handleButtonClick('/')}>
            /
          </button>
          <br />
          <button className='reset' onClick={handleReset}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
