import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation/Navigation';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {!isLogIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
};
