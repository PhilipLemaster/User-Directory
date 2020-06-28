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
      {/* <EmpCard emp={{name:'Philip', title:"Thug", email: "hello@gmail.com"}}/>
      <EmpCard emp={{name:'Philip', title:"Thug", email: "hello@gmail.com"}}/>
      <EmpCard emp={{name:'Philip', title:"Thug", email: "hello@gmail.com"}}/> */}
    </div>
  );
}

export default App;
