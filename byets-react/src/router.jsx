import { createBrowserRouter } from "react-router";
import Layouts from "./Layouts";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import SignIn from "./Pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/gallery",
            element: <Gallery />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        }
    ],
  }
]);

export default router;