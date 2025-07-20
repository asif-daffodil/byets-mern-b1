import { createBrowserRouter } from "react-router";
import App from "./App";
import Layouts from "./Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/about",
            element: <div>About Page</div>,
        },
    ],
  }
]);

export default router;