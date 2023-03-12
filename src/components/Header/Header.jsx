import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {!isLogIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};
