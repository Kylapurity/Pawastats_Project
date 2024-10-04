import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import Features from "./pages/Features";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
