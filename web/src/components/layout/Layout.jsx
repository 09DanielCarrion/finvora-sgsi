import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatButton from "../chat/ChatButton";

export default function Layout() {
  const [lang, setLang] = useState(localStorage.getItem("finvora-lang") || "en");
  const location = useLocation();

  function handleSetLang(next) {
    setLang(next);
    localStorage.setItem("finvora-lang", next);
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <Sidebar lang={lang} />
      <div className="ml-[260px] flex flex-col min-h-screen">
        <Header lang={lang} setLang={handleSetLang} />
        <main className="flex-1 p-8">
          <Outlet context={{ lang }} />
        </main>
      </div>
      <ChatButton lang={lang} currentSection={location.pathname} />
    </div>
  );
}
