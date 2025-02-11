import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LeadsPage from './pages/LeadsPage';
import PropertiesPage from './pages/PropertiesPage';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <nav style={{ width: '200px', padding: '20px' }}>
          <ul>
            <li>
              <Link to="/leads">Leads</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

