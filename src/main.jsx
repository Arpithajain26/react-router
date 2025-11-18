import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Layout from "./layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/user/user.jsx";
import Github, { githubInfoLoader } from "./components/github/github.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> {/* 👉 ADD THIS */}
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<div>404 Not Found</div>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
