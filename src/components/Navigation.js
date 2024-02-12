import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/calculator'>Calculator</Link>
      {/* Add more links for other pages */}
    </div>
  );
};

export default Navigation;
