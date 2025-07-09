import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Sell from "./pages/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, children: [] },
      { path: "/sell", element: <Sell />, children: [] },
    ],
  },
]);

export default router;
