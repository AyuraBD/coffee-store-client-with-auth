import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './UpdateCoffee.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Components/Signup/Signup.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Users from './Components/Users/Users.jsx'

import AuthProviders from './Providers/AuthProviders.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: "/coffee",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element: <Signup></Signup>
  },
  {
    path:'/signin',
    element: <Signin></Signin>
  },
  {
    path: '/users',
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProviders>
  </StrictMode>,
)
