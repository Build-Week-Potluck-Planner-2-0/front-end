import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Logout from './components/Logout';


function App() {

  return (
    <div className="App">
      <div className="wrapper"> {/* <<<   Pushes footer down*/}
        <Navbar />

        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />}  />
          <Route exact path='/' element={<Home />} />
        </Routes>

        <div className="push"></div> {/* <<<   Pushes footer down*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
