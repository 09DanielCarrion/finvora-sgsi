export default function V1V2Toggle({ version, setVersion }) {
  return (
    <div className="flex items-center bg-base-elevated rounded-full p-0.5 text-[11px] font-mono font-medium">
      <button
        onClick={() => setVersion("v1")}
        className={`px-2 py-0.5 rounded-full ${version === "v1" ? "bg-accent-primary text-white" : "text-text-secondary"}`}
      >
        V1
      </button>
      <button
        onClick={() => setVersion("v2")}
        className={`px-2 py-0.5 rounded-full ${version === "v2" ? "bg-accent-primary text-white" : "text-text-secondary"}`}
      >
        V2
      </button>
    </div>
  );
}
