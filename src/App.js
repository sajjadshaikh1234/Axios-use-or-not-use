import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UseStates from './Hooks/UseStates'
import UseReducers from './Hooks/UseReducers';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Effects from './Hooks/Effects';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<UseStates />} />
          <Route exact path='/reduce' element={<UseReducers />} />
          <Route exact path="/effect" element={<Effects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
