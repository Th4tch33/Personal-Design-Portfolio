import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "./js/Main.js";
import "./css/styles.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { activePageCheck } from "./js/Main.js";

function App() {
  const location = useLocation().pathname;

  useEffect(() => {
    activePageCheck(location);
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
