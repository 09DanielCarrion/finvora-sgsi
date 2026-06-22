import LanguageToggle from "../common/LanguageToggle";

export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <span className="header-title">Finvora SGSI</span>
      <div className="flex items-center gap-4">
        <LanguageToggle lang={lang} setLang={setLang} />
        <div className="w-9 h-9 rounded-full bg-accent-primary/20 border border-accent-primary flex items-center justify-center text-sm font-semibold text-accent-primary font-mono">
          DC
        </div>
      </div>
    </header>
  );
}
