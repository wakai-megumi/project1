import React from 'react';
import Navbar from './my-components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './my-components/Pages/Home'
import Services from './my-components/Pages/Services';
import Products from './my-components/Pages/Products';
import Signup from './my-components/Pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Services'  element={<Services/>} /> 
          <Route path='/Products'  element={<Products />} /> 
          <Route path='/sign-up' component={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
