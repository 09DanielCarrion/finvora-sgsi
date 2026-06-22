import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function ChatButton({ currentSection }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} title="Talk to Finvora's Team" className="chat-fab">
        <MessageCircle size={22} className="text-white" />
      </button>
      {open && <ChatPanel onClose={() => setOpen(false)} currentSection={currentSection} />}
    </>
  );
}
