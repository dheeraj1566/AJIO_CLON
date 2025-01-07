import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Men from "./components/men";
import Newfeshion from "./components/Newfeshion";

// import "./App.css";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <div className="men min-h-screen">
      <Men />
      </div>
      <div className="last min-h-screen">
      <Newfeshion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
