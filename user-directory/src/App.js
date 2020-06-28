import React from 'react';
import SortBar from './components/SortBar';
import EmpCard from './components/EmpCard';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <SortBar />
      </Router>
    </div>
  );
}

export default App;
