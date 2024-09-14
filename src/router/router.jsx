import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home";
import { FcAbout } from "react-icons/fc";
import About from "../page/about";

const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/about-us',
            element:<About />
        },
      ]
    },
  ]);


  export default router;