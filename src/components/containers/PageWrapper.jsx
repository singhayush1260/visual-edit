import classes from "./PageWrapper.module.scss";
import { ToastContainer } from 'react-toastify';
const PageWrapper = ({ children }) => {
  return <div className={classes.page_wrapper}>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} 
    closeOnClick  rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    {children}</div>;
};
export default PageWrapper;
