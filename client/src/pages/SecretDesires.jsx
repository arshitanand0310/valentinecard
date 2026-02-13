import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendToServer } from "../api/sendMessage";
import { Eye, EyeOff } from "lucide-react";
import BackButton from "../components/BackButton";

export default function SecretDesires() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  /* ================= SEND EMAIL ================= */
  const sendMessage = async () => {
    if (!text.trim()) return;

    setSending(true);

    const res = await sendToServer(text);

    if (res?.success) {
      setSent(true);
      setTimeout(() => navigate("/final"), 2500);
    } else {
      alert("The universe is busy right now 🌌 try again");
    }

    setSending(false);
  };

  return (
    <div className="page">
      <BackButton />

      <h1 className="title">Tell the universe</h1>
      <p className="subtitle">Only you can read this</p>

      <div className="secret-box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write down something you're afraid of saying (anything...)"
          className={`secret-textarea ${show ? "" : "masked"}`}
        />

        {/* Eye toggle */}
        <button className="eye-btn" onClick={() => setShow(prev => !prev)}>
          {show ? <Eye size={24} /> : <EyeOff size={24} />}
        </button>
      </div>

      {/* SEND BUTTON */}
      {text.length > 0 && !sent && (
        <button
          className="glow-btn send-btn"
          onClick={sendMessage}
          disabled={sending}
        >
          {sending ? (
            "Sending to universe..."
          ) : (
            <>
              Send Message
              <span className="material-symbols-outlined send-icon">
                arrow_right_alt
              </span>
            </>
          )}
        </button>
      )}

      {/* SUCCESS MESSAGE */}
      {sent && <p className="universe">The universe heard it✨</p>}
    </div>
  );
}
