import React, { Component } from "react";
import Layout from "./pages/Layout";
import Home from "./components/Home";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
