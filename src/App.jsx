import { Header } from "./Component/Header";
import { Outlet } from "react-router-dom";
import { Project } from "./Component/Project";
import "./App.css";
export const App = () => {
  return (
    <div className="App h-screen w-full bg-black">
      <Header />
      <Outlet />
      <Project />
    </div>
  );
};
