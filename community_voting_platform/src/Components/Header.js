import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>Community Voting Platform</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>  {/* Link to Home */}
          </li>
          <li>
            <Link to="/create-poll">Create Poll</Link> {/* Link to Create Poll */}
          </li>
        </ul>
      </nav>
    </div>
  );
};
