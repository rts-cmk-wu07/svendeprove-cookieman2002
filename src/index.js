import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./template/Layout";
import Search from "./pages/Search";
import Activities from "./pages/Activites";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import ActivityDetail from "./pages/ActivityDetail";
import TokenProvider from "./context/TokenProvider";
import ProtectedRoute from "./context/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: sessionStorage.getItem("key") !== "true" ? <Welcome/> : <Layout/>,
    children: [
      {
        index: true,
        element: <Activities />,
      },
      {
      path: "*",
      element: <NotFound/>
      },
      {
        path: "/søg",
        element: <Search />,
      },
      
      {
        path: "/kalender",
        element:  <ProtectedRoute><Calendar /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
      path: "/aktivitetsDetalje/:id",
      element: <ActivityDetail/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenProvider>
    <RouterProvider router={routes} />
    </TokenProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
