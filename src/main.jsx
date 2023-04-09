import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home/Home';
import Default from './Components/Default/Default';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import MealCategories from './Components/MealCategories/MealCategories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Default></Default>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      },
      {
        path: "showDetails/:showId",
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.showId}`)
      },
      {
        path: "/categories",
        element: <MealCategories></MealCategories>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
