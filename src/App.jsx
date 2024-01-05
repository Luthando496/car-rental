import About from "./pages/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/team",
    element: <Team />,
  },


]);

const App = () => {


    return(
      <>
        <RouterProvider router={router} />
      </>
    )
}


export default App;