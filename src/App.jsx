import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Features from './pages/Features';
import About from "./pages/About";
import Help from "./pages/Help";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;



