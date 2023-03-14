import { NavLink } from 'react-router-dom';

import './AuthNav.css';
const setActive = ({ isActive }) => (isActive ? ' active' : '');

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={setActive}>
        Register
      </NavLink>
      <NavLink to="/login" className={setActive}>
        Sign in
      </NavLink>
    </div>
  );
};
