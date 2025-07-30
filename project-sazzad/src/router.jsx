import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import StudentId from "./Pages/StudentId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/student",
        children: [
          {
            index: true,
            element: "Hello Student",
          },
          {
            path: "details",
            element: "Student Details",
          },
          {
            path: ":id",
            element: <StudentId />,
          }
        ]
      }
    ],
  },
]);

export default router;