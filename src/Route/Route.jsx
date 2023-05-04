import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import CardHolder from "../component/CardHolder/CardHolder";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import ChefDetails from "../component/ChefDetails/ChefDetails";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Blog from "../component/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('https://chef-recipe-hunter-server-tishansarker873-gmailcom.vercel.app/chefs')
          
        },
        {
          path: "/chef/:id",
          element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://chef-recipe-hunter-server-tishansarker873-gmailcom.vercel.app/chefs/${params.id}`)
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }

      ]
    },
  ]);


  export default router;