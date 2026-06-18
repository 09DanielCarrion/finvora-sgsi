export default function ArtifactViewer({ artifact, onClose }) {
  if (!artifact) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-8">
      <div className="bg-navy-800 border border-navy-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">
            {artifact.id} - {artifact.name}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            Close
          </button>
        </div>
        <div className="text-sm text-gray-300 whitespace-pre-wrap">{artifact.content}</div>
      </div>
    </div>
  );
}
