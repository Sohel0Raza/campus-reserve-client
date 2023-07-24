import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/login/Login';
import SingUp from './pages/login/SingUp';
import ErrorPage from './pages/errorPage/ErrorePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: ([
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singUp',
        element:<SingUp/>
      }
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
