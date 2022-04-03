import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
      <div className="header-container">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/order">OrderReview</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/grandpa">Grandpa</Link>
          <Link to="/help">Help</Link>
        </nav>
      </div>
    );
};

export default Header;<Link></Link>