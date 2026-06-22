import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SearchFilter from "../components/common/SearchFilter";
import ControlCard from "../components/controls/ControlCard";
import ControlDrawer from "../components/controls/ControlDrawer";
import ComingSoon from "../components/artifacts/ComingSoon";
import { annexAControls } from "../data/controls/annex-a";
import { t } from "../lib/i18n";
import { containerVariants } from "../lib/motion";

const TABS = ["Gap Analysis", "SoA", "Risk Treatment Plan", "Implementation Plan", "Policies", "Vendor Assessment"];
const DOMAIN_NAMES = { 5: "Organizational Controls", 6: "People Controls", 7: "Physical Controls", 8: "Technological Controls" };
const DOMAIN_TOTALS = { 5: 37, 6: 8, 7: 14, 8: 34 };

export default function ISO27001() {
  const { lang } = useOutletContext();
  const [tab, setTab] = useState("Gap Analysis");
  const [view, setView] = useState("By Domain");
  const [search, setSearch] = useState("");
  const [openDomains, setOpenDomains] = useState({ 5: true, 6: false, 7: false, 8: false });
  const [selectedControl, setSelectedControl] = useState(null);

  const filtered = useMemo(
    () =>
      annexAControls.filter(
        (c) =>
          c.id.toLowerCase().includes(search.toLowerCase()) ||
          c.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const grouped = useMemo(() => {
    if (view === "By Domain") {
      const groups = {};
      for (const c of filtered) {
        groups[c.domain] = groups[c.domain] || [];
        groups[c.domain].push(c);
      }
      return groups;
    }
    if (view === "By Risk Level") {
      const groups = { Unassessed: [] };
      for (const c of filtered) groups[c.riskLevel ?? "Unassessed"] = [...(groups[c.riskLevel ?? "Unassessed"] || []), c];
      return groups;
    }
    const groups = {};
    for (const c of filtered) {
      groups[c.status] = groups[c.status] || [];
      groups[c.status].push(c);
    }
    return groups;
  }, [filtered, view]);

  return (
    <div>
      <div className="page-header">
        <Breadcrumb items={[t(lang, "dashboard"), t(lang, "iso27001")]} />
        <h1 className="page-title">ISO 27001 - Implementation</h1>
      </div>

      <div className="flex gap-2 mb-6 border-b border-border-subtle overflow-x-auto">
        {TABS.map((tabName) => (
          <button
            key={tabName}
            onClick={() => setTab(tabName)}
            className={`px-4 py-2 text-sm font-medium font-body whitespace-nowrap ${
              tab === tabName ? "text-accent-primary border-b-2 border-accent-primary" : "text-text-secondary"
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      {tab === "Gap Analysis" ? (
        <>
          <div className="flex gap-2 mb-4">
            {["By Domain", "By Risk Level", "By Status"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium font-body ${
                  view === v ? "bg-accent-primary text-white" : "bg-base-elevated text-text-secondary"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <SearchFilter value={search} onChange={setSearch} placeholder="Search controls..." />
          <div className="space-y-3">
            {Object.entries(grouped).map(([key, controls]) => {
              const isDomain = view === "By Domain";
              const open = isDomain ? openDomains[key] : true;
              const assessed = controls.filter((c) => c.status !== "pending").length;
              const total = isDomain ? DOMAIN_TOTALS[key] ?? controls.length : controls.length;

              return (
                <div key={key} className="card p-4">
                  <button
                    onClick={() => isDomain && setOpenDomains((p) => ({ ...p, [key]: !p[key] }))}
                    className="w-full flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold font-display text-text-primary">
                      {isDomain ? `Domain A.${key} - ${DOMAIN_NAMES[key]}` : key} ({controls.length})
                    </span>
                    {isDomain && (open ? <ChevronUp size={16} className="text-text-secondary" /> : <ChevronDown size={16} className="text-text-secondary" />)}
                  </button>
                  {isDomain && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="compliance-track flex-1">
                        <div className="compliance-fill" style={{ width: `${(assessed / total) * 100}%` }} />
                      </div>
                      <span className="text-[11px] text-text-mono font-mono">{assessed}/{total} assessed</span>
                    </div>
                  )}
                  {open && (
                    <motion.div
                      variants={containerVariants}
                      initial="initial"
                      animate="animate"
                      className="grid grid-cols-2 gap-2 mt-4"
                    >
                      {controls.map((control) => (
                        <ControlCard key={control.id} control={control} onClick={() => setSelectedControl(control)} />
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
          <ControlDrawer control={selectedControl} onClose={() => setSelectedControl(null)} />
        </>
      ) : (
        <ComingSoon title={tab} />
      )}
    </div>
  );
}
