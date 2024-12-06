import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{}],
  },
]);

export default router;
