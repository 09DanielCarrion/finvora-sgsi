export default function V1V2Toggle({ version, setVersion }) {
  return (
    <div className="flex items-center bg-navy-700 rounded-full p-0.5 text-[11px] font-medium">
      <button
        onClick={() => setVersion("v1")}
        className={`px-2 py-0.5 rounded-full ${version === "v1" ? "bg-blue-electric text-white" : "text-gray-400"}`}
      >
        V1
      </button>
      <button
        onClick={() => setVersion("v2")}
        className={`px-2 py-0.5 rounded-full ${version === "v2" ? "bg-blue-electric text-white" : "text-gray-400"}`}
      >
        V2
      </button>
    </div>
  );
}
