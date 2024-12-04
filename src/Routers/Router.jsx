import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../pages/Root';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Users from '../pages/Users';
import UpdateUser from '../components/UpdateUser';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/coffee'),
        },
        {
          path: "/users",
          element: <Users/>,
          loader: ()=> fetch('http://localhost:5000/users'),
        },
        {
          path: "/update-user/:id",
          element: <UpdateUser/>,
          loader: ({params})=> fetch(`http://localhost:5000/user/${params.id}`)
        },
        {
          path: "/add-coffee",
          element: <AddCoffee/>
        },
        {
          path: "/update-coffee/:id",
          element: <UpdateCoffee/>,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/sign-up',
          element:<SignUp></SignUp>
        },
        {
          path: '/sign-in',
          element:<SignIn></SignIn>
        }
      ]
    }
    
  ]);

export default Router;