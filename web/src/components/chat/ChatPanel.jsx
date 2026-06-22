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
    <div className="chat-panel flex flex-col max-h-[600px]">
      <div className="flex items-center justify-between px-2 py-1 mb-2">
        <p className="text-sm font-semibold font-display text-text-primary">Finvora's Team</p>
        <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
          <X size={16} />
        </button>
      </div>

      {!character ? (
        <div className="space-y-2">
          {CHARACTERS.map((c) => (
            <CharacterCard key={c} character={c} onClick={() => setCharacter(c)} />
          ))}
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-1 py-2 space-y-3 min-h-[200px] max-h-[360px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm font-body rounded-lg px-3 py-2 max-w-[85%] ${
                  m.role === "user" ? "bg-accent-primary/20 text-text-primary ml-auto" : "bg-base-elevated text-text-primary"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <p className="text-xs text-text-secondary font-body">Typing...</p>}
            {error && <p className="text-xs text-status-critical font-body">{error}</p>}
          </div>
          <div className="border-t border-border-subtle pt-2 flex items-center gap-2">
            <button onClick={() => setCharacter(null)} className="text-xs font-body text-text-secondary hover:text-text-primary">
              Back
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-base-elevated rounded-full px-3 py-2 text-sm font-body text-text-primary placeholder-text-secondary focus:outline-none"
            />
            <button onClick={handleSend} className="text-accent-primary hover:text-accent-secondary">
              <Send size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
