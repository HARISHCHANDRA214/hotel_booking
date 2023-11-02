import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Booking from './components/Booking';
import ConfirmationPage from './components/ConfirmationPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import Wishlist from './components/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "booking",
    element: <Booking/>
  },
  {
    path: "confirmationpage",
    element: <ConfirmationPage/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "profilepage",
    element: <ProfilePage/>
  },
  {
    path: "wishlist",
    element: <Wishlist/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
