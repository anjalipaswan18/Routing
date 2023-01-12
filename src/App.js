import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Message from "./Message";

const App = () => {
  return (
    <BrowserRouter>
      <Home></Home>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
