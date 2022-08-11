import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Survey } from "./pages/survey";
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
];

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routesArray.map((e, i) => (
          <Route key={i} path={e.path} element={e.element} />
        ))}
      </Routes>
    </div>
  );
}
