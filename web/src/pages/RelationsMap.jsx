import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import * as d3 from "d3";
import Breadcrumb from "../components/common/Breadcrumb";
import { artifactRelations } from "../data/relations";
import { t } from "../lib/i18n";

const VIEWS = ["All Relations", "By ISO Clause", "By Regulation", "By Annex A Control"];
const BLOCK_COLORS = { B0: "#06B6D4", B1: "#3B82F6", B2: "#8B5CF6", B3: "#10B981" };

function blockOf(id) {
  return id.slice(0, 2);
}

export default function RelationsMap() {
  const { lang } = useOutletContext();
  const [view, setView] = useState("All Relations");
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const width = containerRef.current?.clientWidth ?? 600;
    const height = 500;

    const nodeSet = new Set();
    const links = [];
    Object.entries(artifactRelations).forEach(([from, tos]) => {
      nodeSet.add(from);
      tos.forEach((to) => {
        nodeSet.add(to);
        links.push({ source: from, target: to });
      });
    });
    const nodes = Array.from(nodeSet).map((id) => ({ id }));

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(80).strength(0.5))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("class", "graph-link")
      .attr("stroke", "#3B82F6");

    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", "graph-node")
      .style("cursor", "pointer");

    node
      .append("circle")
      .attr("r", 16)
      .attr("fill", "#0C1220")
      .attr("stroke", (d) => BLOCK_COLORS[blockOf(d.id)] ?? "#3B82F6")
      .style("color", (d) => BLOCK_COLORS[blockOf(d.id)] ?? "#3B82F6");

    node
      .append("text")
      .text((d) => d.id)
      .attr("dy", 3);

    node.on("mouseover", (event, d) => {
      const connectedIds = new Set(
        links
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .flatMap((l) => [l.source.id, l.target.id])
      );
      node.style("opacity", (n) => (connectedIds.has(n.id) ? 1 : 0.15));
      link.style("opacity", (l) => (l.source.id === d.id || l.target.id === d.id ? 0.8 : 0.05));
    });

    node.on("mouseout", () => {
      node.style("opacity", 1);
      link.style("opacity", 0.4);
    });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, []);

  return (
    <div>
      <div className="page-header">
        <Breadcrumb items={[t(lang, "dashboard"), t(lang, "relationsMap")]} />
        <h1 className="page-title">Relations Map</h1>
      </div>

      <div className="flex gap-2 mb-4">
        {VIEWS.map((v) => (
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

      <div className="grid grid-cols-4 gap-6">
        <div ref={containerRef} className="col-span-3 card p-4">
          <svg ref={svgRef} className="w-full h-[500px]" />
        </div>
        <div className="card p-4 h-fit">
          <p className="text-sm font-semibold font-display text-text-primary mb-3">Legend</p>
          {Object.entries(BLOCK_COLORS).map(([block, color]) => (
            <div key={block} className="flex items-center gap-2 text-xs text-text-secondary font-body mb-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              {block}
            </div>
          ))}
          <div className="flex items-center gap-2 text-xs text-text-secondary font-body mt-3">
            <span className="w-4 h-0.5 bg-accent-primary" /> Relationship edge
          </div>
        </div>
      </div>
    </div>
  );
}
