import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import './Navigation.css';
const setActive = ({ isActive }) => (isActive ? ' active' : '');

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" end className={setActive}>
        Home
      </NavLink>
      {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
