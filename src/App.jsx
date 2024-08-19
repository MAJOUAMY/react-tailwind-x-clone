import React from "react";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="pl-16 pr-12 font-Segoe">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
