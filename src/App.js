import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Resources from "./components/Resources";

function App() {
  return (

    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
