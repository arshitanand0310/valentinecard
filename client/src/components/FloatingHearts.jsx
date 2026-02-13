import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 40; i++) {
      const duration = Math.random() * 10 + 8;

      arr.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: duration,
        delay: -Math.random() * duration   // KEY FIX (negative delay)
      });
    }

    setHearts(arr);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`
          }}
        />
      ))}
    </div>
  );
}
