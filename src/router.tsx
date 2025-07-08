import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, children: [] },
      { path: "/search", element: <Search />, children: [] },
    ],
  },
]);

export default router;
