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
import Colleges from './pages/colleges/Colleges';
import CollegeDetails from './components/CollegeDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Admission from './pages/admission/Admission';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: ([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/colleges',
        element: <Colleges />
      },
      {
        path: '/collegeDetails/:id',
        element: <CollegeDetails />,
        loader: () => fetch("https://campus-reserve-server-smoky.vercel.app/colleges")
      },
      {
        path: '/admission',
        element: <Admission />
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp />
      }
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
