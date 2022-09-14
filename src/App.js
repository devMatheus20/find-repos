import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './Pages/Styles/globalStyles';
import MyRoutes from './Routes/routes';


export default function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>
      <MyRoutes />
    </>
  );
}

