import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";

import "./ts/Home.ts";
import "./css/styles.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { activePageCheck } from "./ts/Home.ts";

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
