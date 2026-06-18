import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import SearchFilter from "../components/common/SearchFilter";
import ControlCard from "../components/controls/ControlCard";
import ComingSoon from "../components/artifacts/ComingSoon";
import { annexAControls } from "../data/controls/annex-a";
import { t } from "../lib/i18n";

const TABS = ["Gap Analysis", "SoA", "Risk Treatment Plan", "Implementation Plan", "Policies", "Vendor Assessment"];
const DOMAIN_NAMES = { 5: "Organizational", 6: "People", 7: "Physical", 8: "Technological" };

export default function ISO27001() {
  const { lang } = useOutletContext();
  const [tab, setTab] = useState("Gap Analysis");
  const [view, setView] = useState("By Domain");
  const [search, setSearch] = useState("");

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
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "iso27001")]} />
      <h1 className="text-2xl font-bold text-white mb-6">ISO 27001 - Implementation</h1>

      <div className="flex gap-2 mb-6 border-b border-navy-700 overflow-x-auto">
        {TABS.map((tabName) => (
          <button
            key={tabName}
            onClick={() => setTab(tabName)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              tab === tabName ? "text-blue-electric border-b-2 border-blue-electric" : "text-gray-400"
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
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  view === v ? "bg-blue-electric text-white" : "bg-navy-700 text-gray-400"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <SearchFilter value={search} onChange={setSearch} placeholder="Search controls..." />
          <div className="space-y-6">
            {Object.entries(grouped).map(([key, controls]) => (
              <div key={key}>
                <h2 className="text-sm font-semibold text-gray-300 mb-3">
                  {view === "By Domain" ? `Domain ${key} - ${DOMAIN_NAMES[key]}` : key} ({controls.length})
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {controls.map((control) => (
                    <ControlCard key={control.id} control={control} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ComingSoon title={tab} />
      )}
    </div>
  );
}
