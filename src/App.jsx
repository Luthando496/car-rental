import About from "./pages/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
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