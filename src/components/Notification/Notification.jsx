import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyParams = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notifyContactsCount = (itemsLength = null) => {
  itemsLength === 0
    ? toast.success(
        'Your contact book is empty, add your contacts.',
        notifyParams
      )
    : toast.success(`You have ${itemsLength} contacts!`, notifyParams);
};

export const notifyDeleteContactSuccess = () =>
  toast.success('Contact deleted!', notifyParams);

export const notifyAddContactSuccess = () =>
  toast.success('🦄 Contact created!', notifyParams);

export const notifyError = () =>
  toast.error('Oops, something went wrong, try again.', notifyParams);

export default function Notification() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
