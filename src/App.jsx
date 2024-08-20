import React from "react";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
function App() {
  return (
    <div className=" px-3 container mx-auto ">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="explore" element={<Explore />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
