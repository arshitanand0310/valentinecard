import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OpenCard from "./pages/OpenCard";
import ValentineQuestion from "./pages/ValentineQuestion";
import LoveLetter from "./pages/LoveLetter";
import SnacksSelector from "./pages/SnacksSelector";
import SecretDesires from "./pages/SecretDesires";
import FinalPage from "./pages/FinalPage";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  return (
    <Router>
      <FloatingHearts />

      <Routes>
        <Route path="/" element={<OpenCard />} />
        <Route path="/question" element={<ValentineQuestion />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/snacks" element={<SnacksSelector />} />
        <Route path="/secret" element={<SecretDesires />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
