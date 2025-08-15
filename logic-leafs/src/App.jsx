import Services from './pages/Services';
<Route path="/services" element={<Services />} />
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services'; // ✅ Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
