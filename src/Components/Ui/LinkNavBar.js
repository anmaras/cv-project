import React from 'react';
import { Link } from 'react-router-dom';

function LinkNavBar() {
  return (
    <div>
      <Link to="/">Personal</Link>
      <Link to="/education">education</Link>
      <Link to="/experience">experience</Link>
    </div>
  );
}

export default LinkNavBar;
