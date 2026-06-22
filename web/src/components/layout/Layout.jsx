import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatButton from "../chat/ChatButton";
import { pageVariants } from "../../lib/motion";

export default function Layout() {
  const [lang, setLang] = useState(localStorage.getItem("finvora-lang") || "en");
  const location = useLocation();

  function handleSetLang(next) {
    setLang(next);
    localStorage.setItem("finvora-lang", next);
  }

  return (
    <div className="min-h-screen bg-base-bg">
      <Sidebar lang={lang} />
      <Header lang={lang} setLang={handleSetLang} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet context={{ lang }} />
          </motion.div>
        </AnimatePresence>
      </main>
      <ChatButton lang={lang} currentSection={location.pathname} />
    </div>
  );
}
