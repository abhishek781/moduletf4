import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statements
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import WordDetailsPage from './pages/WordDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use element property */}
          <Route path="/history" element={<History />} /> {/* Use element property */}
          <Route path="/word/:word" element={<WordDetailsPage />} /> {/* Use element property */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



