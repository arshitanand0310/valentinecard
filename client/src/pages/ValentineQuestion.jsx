import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "../components/BackButton";


const phrases = [
  "please 🥺",
  "dont be naughty 💗",
  "are you sure?? 😭",
  "think again 👀",
  "i'll cry",
  "nice try 😏",
  "destiny says YES",
  "wrong answer 😂",
  "you loveeeeee me",
  "say yes princess 👑",
  "it was always yes"
];

export default function ValentineQuestion() {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [texts, setTexts] = useState([]);

  const moveButton = () => {
   
    const x = Math.random() * 500 - 250;
    const y = Math.random() * 500 - 250;
    setPos({ x, y });

    
    const newText = {
      id: Date.now(),
      text: phrases[Math.floor(Math.random() * phrases.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };

    setTexts((prev) => [...prev, newText]);

    setTimeout(() => {
      setTexts((prev) => prev.filter((t) => t.id !== newText.id));
    }, 2000);
  };

  return (
    

    <div className="page">

       
      <BackButton />

      <h1 className="title">Will you be my Valentine?</h1>
      <p className="subtitle">Choose carefully 😡</p>

      <div className="btn-row">
        <button className="glow-btn yes" onClick={() => navigate("/letter")}>
          YES 💗
        </button>

        <button
          className="glow-btn no"
          onMouseEnter={moveButton}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: "transform 0.25s ease-out"
          }}
        >
          NO 💩
        </button>
      </div>

      {texts.map((t) => (
        <span
          key={t.id}
          className="floating-text romantic"
          style={{ left: t.x, top: t.y }}
        >
          {t.text}
        </span>
      ))}
    </div>
  );
}
