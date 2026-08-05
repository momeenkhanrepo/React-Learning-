import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import KIds from "./pages/KIds";
import Notfoundpage from "./pages/Notfoundpage";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />

        {/* Dynamic routing */}
        <Route path="courses/:courseid" element={<CourseDetail />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path="/product/kids" element={<KIds />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
