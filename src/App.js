import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Layout/>}>

                <Route index element={<Home/>}/>
                <Route path="contact" element = {<Contactus/>} />
                <Route path="/about" element = {<Aboutus/>} />

           </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App
