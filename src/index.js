import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Page from './Page'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './HI/Menu';
import Order from './HI/Order';
import UserInfo from './HI/UserInfo';
import UserNum from './HI/UserNum';
import SaleOrder from './HI/SaleOrder';
import SaleReport from './HI/SaleReport';

// import App from './App';
// import Page from './Page';
// import ErrorPage from './ErrorPage';
// import Contact from './Test';
// import Car from './HI/Car';


//設置path，以及對應的元件
const router = createBrowserRouter([
  {
    path: "/",
    element:<Menu />,
  },{
    path: "/order",
    element:<Order />,
  },{
    path: "/info",
    element:<UserInfo />,
  },{
    path: "/num",
    element:<UserNum />,
  },{
    path: "/S/order",
    element:<SaleOrder />,
  },{
    path: "/S/report",
    element:<SaleReport />,
  },
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
