import React from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from './ApplicationRouters';


export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listUsers">List Users</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      <ApplicationRoutes />
    </div>
  );
}