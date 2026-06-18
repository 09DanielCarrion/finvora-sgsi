export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="flex items-center bg-navy-700 rounded-full p-1 text-sm font-medium">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-blue-electric text-white" : "text-gray-400"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1 rounded-full transition-colors ${
          lang === "es" ? "bg-blue-electric text-white" : "text-gray-400"
        }`}
      >
        ES
      </button>
    </div>
  );
}
