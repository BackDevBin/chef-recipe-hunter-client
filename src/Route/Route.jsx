import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <h4>route 2</h4>
        },
        {
          path: "/category",
          element: <h3>route 1</h3>,
          
        }
      ]
    },
  ]);


  export default router;