import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// components
import Home from './components/LandingPage';
import PlanetIndex from './components/PlanetIndex';

function App() {
  return (
    <div className="App h-screen flex flex-column overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<PlanetIndex />} />
        </ Routes>
      </Router>
      {/* <NavBar />
      <Home /> */}
    </div>
  );
}

export default App;
