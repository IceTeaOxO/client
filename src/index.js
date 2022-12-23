import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page from './Page';
import ErrorPage from './ErrorPage';
// import Page from './Page'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Test';
import Menu from './HI/Menu';
import Order from './HI/Order';
import UserInfo from './HI/UserInfo';
import UserNum from './HI/UserNum';
import SaleOrder from './HI/SaleOrder';
import SaleReport from './HI/SaleReport';




//設置path，以及對應的元件
const router = createBrowserRouter([
  {
    path: "/P",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },{
    path: "/a",
    element:<App />,
  },{
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
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
