import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

// import PacmanLoader from 'react-spinners/PacmanLoader';
// import { ToastContainer } from 'react-toastify';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { ContactsFilter } from './ContactsFilter/ContactsFilter';
// import { selectError, selectIsLoading } from '../redux/contacts/selectors';

// import { Container, H1, H2 } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
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
          path="registration"
          element={
            <PublicRoute restricted>
              <RegisterPage />
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

    // <>
    //   <Container>
    //     <H1>Contact Manager</H1>
    //     <ContactForm />

    //     <H2>Contacts filter</H2>
    //     <ContactsFilter />

    //     <H2>Contacts</H2>
    //     {isLoading && !error && <p>Request in progress...</p>}
    //     {isLoading && !error && <PacmanLoader color="#3a7999" />}
    //     <ContactList />
    //   </Container>

    //   <ToastContainer
    //     position="top-right"
    //     autoClose={1500}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    // </>
  );
};
