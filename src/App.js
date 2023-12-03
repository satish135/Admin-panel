// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import './App.css';

import './Boxss.css';
import './Navbar.css';
import './Sidebar.css';
import './Box';
import MainApp from './MainApp';
import Boxss from './Boxss';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <MainApp/>
        <Boxss/>
        <div className="content">
          <Routes>
            <Route path="/dashboard" />
            <Route path="/admin"  />
            <Route path="/teacher" />
            <Route path="/student"  />
            <Route path="/parents"/>
            <Route path="/driver"  />
            <Route path="/event"  />
            <Route path="/finance"  />
            <Route path="/admission"  />
            <Route path="/management" />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

