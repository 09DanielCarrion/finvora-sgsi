import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function ChatButton({ currentSection }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        title="Talk to Finvora's Team"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-electric to-blue-cyan flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
      >
        <MessageCircle size={24} className="text-white" />
      </button>
      {open && <ChatPanel onClose={() => setOpen(false)} currentSection={currentSection} />}
    </>
  );
}
