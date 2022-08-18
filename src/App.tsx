import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Survey } from "./pages/survey";
import { Account } from "./pages/account";
import { Navbar } from "./components/navbar";
import "./styles.css";
import React from "react";

interface RouteProp {
  label: string;
  path: string;
  element: React.ReactNode;
}
const routesArray: RouteProp[] = [
  { label: "Error", path: "*", element: <p> not found... </p> },
  { label: "Home", path: "/", element: <Home /> },
  { label: "Survey", path: "/survey", element: <Survey /> },
  { label: "Account", path: "/account", element: <Account /> }
];

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routesArray.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
