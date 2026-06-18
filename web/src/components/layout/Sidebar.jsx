import { NavLink } from "react-router-dom";
import { LayoutDashboard, Building2, ShieldCheck, Bot, Settings, Network } from "lucide-react";
import { t } from "../../lib/i18n";

const NAV_ITEMS = [
  { to: "/", icon: LayoutDashboard, key: "dashboard", end: true },
  { to: "/company", icon: Building2, key: "company" },
  { to: "/iso27001", icon: ShieldCheck, key: "iso27001" },
  { to: "/eu-ai-act", icon: Bot, key: "euAiAct" },
  { to: "/operations", icon: Settings, key: "operations" },
  { to: "/relations", icon: Network, key: "relationsMap" },
];

export default function Sidebar({ lang }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-navy-800 border-r border-navy-700 flex flex-col bg-[radial-gradient(circle_at_1px_1px,rgba(30,111,255,0.08)_1px,transparent_0)] bg-[length:20px_20px]">
      <div className="px-6 py-6 border-b border-navy-700">
        <span className="text-xl font-bold tracking-wide text-white">FINVORA</span>
        <p className="text-xs text-gray-500 mt-0.5">Cyber-Command</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ to, icon: Icon, key, end }) => (
          <NavLink
            key={key}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-electric/10 text-white border border-blue-electric shadow-[0_0_12px_rgba(30,111,255,0.5)]"
                  : "text-gray-400 hover:bg-navy-700 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            {t(lang, key)}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 text-xs text-gray-500 border-t border-navy-700 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-status-implemented animate-pulse" />
        SYSTEM LIVE
      </div>
    </aside>
  );
}
