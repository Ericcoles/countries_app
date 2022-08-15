import React, { Component } from "react";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const RouterWrapper = (props) => {
//   const params = useParams();
//   return <
// }

const App = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
