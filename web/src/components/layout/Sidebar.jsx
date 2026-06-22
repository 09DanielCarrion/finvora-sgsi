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
    <aside className="sidebar">
      <div className="sidebar-logo">
        <p className="logo-text">FINVORA</p>
        <p className="logo-sub">Cyber-Command</p>
      </div>
      <nav className="flex-1 py-4">
        {NAV_ITEMS.map(({ to, icon: Icon, key, end }) => (
          <NavLink
            key={key}
            to={to}
            end={end}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icon size={18} />
            {t(lang, key)}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="system-status">
          <span className="status-dot" />
          SYSTEM LIVE
        </div>
      </div>
    </aside>
  );
}
