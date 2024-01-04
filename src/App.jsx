import About from "./pages/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Testimonial from "./pages/Testimonial";

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

]);

const App = () => {


    return(
      <>
        <RouterProvider router={router} />
      </>
    )
}


export default App;