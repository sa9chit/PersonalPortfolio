import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hero } from "./Component/Hero";
import { Resume } from "./Component/resume";
import "./index.css";
import { App } from "./App";
import { About } from "./Component/about";
import { AboutProject } from "./Component/AboutProjects";
import { Contact } from "./Component/Contact";
let routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "aboutProject",
        element: <AboutProject />,
      },
      {
        path: "Contact-Us",
        element: <Contact />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>
);
