import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  // Add any props here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {/* Add other navigation items */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;