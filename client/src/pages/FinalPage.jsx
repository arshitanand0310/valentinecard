import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { resetAll } from "../api/sendMessage";
import BackButton from "../components/BackButton";

export default function FinalPage() {
  const navigate = useNavigate();

  const replay = () => {
    resetAll();          // ⭐ clears snacks + session
    navigate("/");       // go back to start
  };

  return (
    <div className="page">

      <BackButton />

      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        I knew it 💗
      </motion.h1>

      <motion.p
        className="final-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        The universe delivered your message to me...
      </motion.p>

      <motion.p
        className="final-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        Now I owe you hugs, smiles, and all the snacks you picked 😌
      </motion.p>

      <motion.p
        className="final-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        Happy Valentine's Day ❤️
      </motion.p>

      <motion.button
        className="glow-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        onClick={replay}
      >
        Replay 💞
      </motion.button>

    </div>
  );
}
