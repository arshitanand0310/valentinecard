import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const letterLines = [
  "X,",
  "",
  "I don’t say this enough,",
  "but you mean more to me than I can explain.",
  "",
  "Life was normal before you…",
  "and then you came,",
  "and everything just felt lighter.",
  "",
  "I smile more,",
  "I worry less,",
  "and even simple days feel special with you.",
  "",
  "You are honestly the most beautiful person",
  "not just how you look,",
  "but how you care and stay.",
  "",
  "You’ve become the most important part of my life",
  "",
  "I don’t want a future without you in it.",
  "I want all the days,",
  "happy or boring",
  "with you.",
  "",
  "I just wish we stay like this",
  "forever.. ",
  "",
  "— x"
];

export default function LoveLetter() {
  const [visibleLines, setVisibleLines] = useState([]);
  const navigate = useNavigate();
  const boxRef = useRef(null);
  const startedRef = useRef(false); 

  
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let index = 0;

    const typeNext = () => {
      setVisibleLines((prev) => [...prev, letterLines[index]]);
      const currentLine = letterLines[index];
      index++;

      if (index < letterLines.length) {
        const delay = currentLine === "" ? 850 : 550;
        setTimeout(typeNext, delay);
      }
    };

    typeNext();
  }, []);

 
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="page">

      
      <BackButton />

      <div className="letter-box" ref={boxRef}>
        {visibleLines.map((line, i) => (
          <p key={i} className="letter-line">
            {line || <br />}
          </p>
        ))}
      </div>

      {visibleLines.length === letterLines.length && (
        <button className="glow-btn" onClick={() => navigate("/snacks")}>
          Continue 💌
        </button>
      )}
    </div>
  );
}
