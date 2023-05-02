import { createBrowserRouter } from "react-router-dom";
import Header from "../shared/Header/Header";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
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