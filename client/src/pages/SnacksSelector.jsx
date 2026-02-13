import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveItems, getItems } from "../api/sendMessage";
import BackButton from "../components/BackButton";

const snacks = [
  "Dark Chocolate",
  "KitKat",
  "Oreo",
  "Kinder Joy",
  "Pizza",
  "Doritos",
  "Pringles",
  "Ice Cream",
  "Brownie",
  "Snickers",
  "Kisses",
  "ME?👀",
  
];

export default function SnacksSelector() {
  // Load saved items when page opens
  const [selected, setSelected] = useState(() => getItems() || []);
  const navigate = useNavigate();

  // Auto save whenever selection changes
  useEffect(() => {
    saveItems(selected);
  }, [selected]);

  const toggleItem = (item) => {
    if (selected.includes(item))
      setSelected(selected.filter((i) => i !== item));
    else setSelected([...selected, item]);
  };

  const continueNext = () => {
    navigate("/secret");
  };

  return (
    <div className="page">
      <BackButton />

      <h1 className="title">Choose your treats 😋</h1>
      <p className="subtitle">Pick anything you want, no limits</p>

      <div className="snacks-grid">
        {snacks.map((item) => (
          <div
            key={item}
            className={`snack-card ${selected.includes(item) ? "selected" : ""}`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <button className="glow-btn" onClick={continueNext}>
          Next 💝
        </button>
      )}
    </div>
  );
}
