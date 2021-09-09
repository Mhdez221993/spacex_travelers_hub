import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text:
  <div className="nav-brand">
    {' '}
    <img src={logo} className="App-logo" alt="logo" />
    <span className="brand-name">Space Travelers&apos; Hub</span>
  </div>,
    },
    {
      id: 2,
      path: '/',
      text: <span className="nav-book">Rockets</span>,
    },
    {
      id: 3,
      path: '/missions',
      text: <span className="nav-categories">Missions</span>,
    },
    {
      id: 4,
      path: '/dragons',
      text: <span className="nav-categories">Dragons</span>,
    },
    {
      id: 5,
      path: '/profile',
      text: <span className="nav-categories">Profile</span>,
    },
  ];

  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map(link => (
          <li key={link.id} className="nav-links">
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
