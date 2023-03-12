import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Notification from 'components/Notification/Notification';
import { Header } from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <Notification />
        </Suspense>
      </div>
    </>
  );
}
