import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Div } from './App.styled';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Div>
      <PacmanLoader color="#3a7999" />
      <b style={{ fontSize: 22, color: '#3a7999' }}>Refreshing user...</b>
    </Div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
