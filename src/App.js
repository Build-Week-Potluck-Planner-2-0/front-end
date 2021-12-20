import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Logout from './components/Logout';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const registerUser = newUser => {
    axios.post('http://localhost:3000/api/login', newUser)
      .then(res => {
        console.log(res)
        //setOrders([res.data, ...users])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    registerUser(newUser);
  }

  return (
    <div className="App">
      <div className="wrapper"> {/* <<<   Pushes footer down*/}
        <Navbar />

        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register values={formValues} change={inputChange} submit={formSubmit}/>}  />
          <Route exact path='/' element={<Home />} />
        </Routes>

        <div className="push"></div> {/* <<<   Pushes footer down*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
