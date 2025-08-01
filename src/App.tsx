import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="mx-36 my-5">
      <Header />
      <Outlet />
    </div>
  );
}
