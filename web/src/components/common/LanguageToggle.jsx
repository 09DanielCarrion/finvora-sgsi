export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle">
      <button onClick={() => setLang("en")} className={`lang-btn ${lang === "en" ? "active" : ""}`}>
        EN
      </button>
      <button onClick={() => setLang("es")} className={`lang-btn ${lang === "es" ? "active" : ""}`}>
        ES
      </button>
    </div>
  );
}
