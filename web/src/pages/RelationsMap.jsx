import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import { artifactRelations } from "../data/relations";
import { t } from "../lib/i18n";

const VIEWS = ["All Relations", "By ISO Clause", "By Regulation", "By Annex A Control"];

function buildLayout(relations) {
  const nodeSet = new Set();
  Object.entries(relations).forEach(([from, tos]) => {
    nodeSet.add(from);
    tos.forEach((to) => nodeSet.add(to));
  });
  const nodes = Array.from(nodeSet);
  const radius = 220;
  const center = { x: 300, y: 250 };
  const positions = {};
  nodes.forEach((id, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI;
    positions[id] = {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    };
  });
  return { nodes, positions };
}

export default function RelationsMap() {
  const { lang } = useOutletContext();
  const [view, setView] = useState("All Relations");
  const { nodes, positions } = useMemo(() => buildLayout(artifactRelations), []);

  const edges = useMemo(() => {
    const list = [];
    Object.entries(artifactRelations).forEach(([from, tos]) => {
      tos.forEach((to) => list.push({ from, to }));
    });
    return list;
  }, []);

  return (
    <div>
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "relationsMap")]} />
      <h1 className="text-2xl font-bold text-white mb-4">Relations Map</h1>

      <div className="flex gap-2 mb-4">
        {VIEWS.map((v) => (
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

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-navy-800 border border-navy-700 rounded-xl p-4">
          <svg viewBox="0 0 600 500" className="w-full h-[500px]">
            {edges.map((edge, i) => (
              <line
                key={i}
                x1={positions[edge.from].x}
                y1={positions[edge.from].y}
                x2={positions[edge.to].x}
                y2={positions[edge.to].y}
                stroke="#1E6FFF"
                strokeOpacity={0.4}
                strokeWidth={1.5}
              />
            ))}
            {nodes.map((id) => (
              <g key={id}>
                <circle cx={positions[id].x} cy={positions[id].y} r={22} fill="#0F2140" stroke="#1E6FFF" strokeWidth={1.5} />
                <text
                  x={positions[id].x}
                  y={positions[id].y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={9}
                  fill="#FFFFFF"
                >
                  {id}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="bg-navy-800 border border-navy-700 rounded-xl p-4 h-fit">
          <p className="text-sm font-semibold text-white mb-3">Legend</p>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span className="w-4 h-4 rounded-full bg-navy-700 border border-blue-electric" /> Artifact node
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-4 h-0.5 bg-blue-electric" /> Relationship edge
          </div>
        </div>
      </div>
    </div>
  );
}
