import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n/config";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import WhatsAppButton from "./components/UI/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Realizations from "./pages/Realizations";
import { AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          <Navbar />
          <AnimatePresence mode="wait">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/realisations" element={<Realizations />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}
