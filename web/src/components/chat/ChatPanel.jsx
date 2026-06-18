import { useState } from "react";
import { X, Send } from "lucide-react";
import CharacterCard from "./CharacterCard";
import { askCharacter } from "../../lib/claude-client";

const CHARACTERS = ["CISO", "CTO", "LegalDirector", "CFO"];

export default function ChatPanel({ onClose, currentSection }) {
  const [character, setCharacter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSend() {
    if (!input.trim() || !character) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const reply = await askCharacter(character, userMessage, currentSection);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-24 right-6 w-[380px] max-h-[600px] bg-navy-800/95 backdrop-blur-md border border-navy-700 rounded-2xl shadow-2xl flex flex-col z-50">
      <div className="flex items-center justify-between px-4 py-3 border-b border-navy-700">
        <p className="text-sm font-semibold text-white">Finvora's Team</p>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {!character ? (
        <div className="p-4 space-y-2">
          {CHARACTERS.map((c) => (
            <CharacterCard key={c} character={c} onClick={() => setCharacter(c)} />
          ))}
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[360px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm rounded-lg px-3 py-2 max-w-[85%] ${
                  m.role === "user"
                    ? "bg-blue-electric/20 text-white ml-auto"
                    : "bg-navy-700 text-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <p className="text-xs text-gray-500">Typing...</p>}
            {error && <p className="text-xs text-status-critical">{error}</p>}
          </div>
          <div className="border-t border-navy-700 p-3 flex items-center gap-2">
            <button
              onClick={() => setCharacter(null)}
              className="text-xs text-gray-400 hover:text-white"
            >
              Back
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-navy-700 rounded-full px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
            <button onClick={handleSend} className="text-blue-electric hover:text-blue-cyan">
              <Send size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
