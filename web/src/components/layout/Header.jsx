import LanguageToggle from "../common/LanguageToggle";

export default function Header({ lang, setLang }) {
  return (
    <header className="h-16 bg-navy-800 border-b border-blue-electric flex items-center justify-between px-8 sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-white">Finvora SGSI</h1>
      <div className="flex items-center gap-4">
        <LanguageToggle lang={lang} setLang={setLang} />
        <div className="w-9 h-9 rounded-full bg-blue-electric/20 border border-blue-electric flex items-center justify-center text-sm font-semibold text-blue-electric">
          DC
        </div>
      </div>
    </header>
  );
}
