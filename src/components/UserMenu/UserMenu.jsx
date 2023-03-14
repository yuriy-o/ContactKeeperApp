import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import { UserName, Wrapper } from './UserMenu.styled';
import './UserMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>

      <button
        className="btn__logout btn-rotate"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span>Are you sure?</span>
        <span>Logout</span>
      </button>
    </Wrapper>
  );
};
