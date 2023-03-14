import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyParams = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const notifyContactsCount = (itemsLength = null) => {
  itemsLength === 0
    ? toast.info('Your contact book is empty, add your contacts.', notifyParams)
    : toast.info(`You have ${itemsLength} contacts!`, notifyParams);
};

export const notifyDeleteContactSuccess = () =>
  toast.warn('❌ Contact deleted!', notifyParams);

export const notifyAddContactSuccess = () =>
  toast.info('👍🏼 Contact created!', notifyParams);

export const notifyError = () =>
  toast.error('Oops, something went wrong, try again.', notifyParams);

export default function Notification() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
