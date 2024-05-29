import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routerObject from './ReactRoutes/RouterObject';
import "./main.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerObject} />
  </React.StrictMode>,
)
