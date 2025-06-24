import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import WorkBBB from "./pages/Work_BBB.jsx";
import WorkVBall from "./pages/Work_VBall.jsx";
import WorkNACBAIT from "./pages/Work_NACBAIT.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./js/Main.js";
import "./css/styles.css";

import CursorAnim from "./pages/cursorAnimTest.jsx";

import { Route, Router, Routes, useLocation } from "react-router-dom";
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
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workBBB" element={<WorkBBB />} />
            <Route path="/workVBall" element={<WorkVBall />} />
            <Route path="/workNACBAIT" element={<WorkNACBAIT />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
