import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



export default function OpenCard() {
  const navigate = useNavigate();

  return (

    

    <div className="page">
      <motion.div
        className="main-heart"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/question")}
      >
        ❤️
      </motion.div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Tap to Open My Heart
      </motion.h1>

      <p className="subtitle">I made something for you 💗</p>
    </div>
  );
}
