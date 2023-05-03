import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import CardHolder from "../component/CardHolder/CardHolder";
import ErrorPage from "../component/ErrorPage/ErrorPage";



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
          path: "/chef",
          element: <CardHolder></CardHolder>,
          
          
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
        }
      ]
    },
  ]);


  export default router;