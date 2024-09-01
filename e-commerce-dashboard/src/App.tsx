import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Todos from './intPrepare/int';
import UserProfile from './intPrepare/userProfile';
import ProgressBar from './components/progress-bar';
import ScrollBar from './components/scroll-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import CheckOut from './components/checkout';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found : <span className='text-red-700 font-[200]'>404 Error</span></h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
