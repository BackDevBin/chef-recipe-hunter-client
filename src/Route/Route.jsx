import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import CardHolder from "../component/CardHolder/CardHolder";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import ChefDetails from "../component/ChefDetails/ChefDetails";



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
          element: <ChefDetails></ChefDetails>,
          loader: ({params}) => fetch(`https://chef-recipe-hunter-server-tishansarker873-gmailcom.vercel.app/chefs/${params.id}`)
          
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
        }
      ]
    },
  ]);


  export default router;