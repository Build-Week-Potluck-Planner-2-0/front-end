import './App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent'
import ChooseItem from './components/ChooseItem';


function App() {
  const [ loggedIn, setLoggedIn ] = useState(localStorage.getItem("token") || false);

  return (
    <div className="App">
      <div className="wrapper"> {/* <<<   Pushes footer down*/}
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route path="/acceptedInvite/chooseItem" element={<PrivateRoute />}>
            <Route path='/acceptedInvite/chooseItem/:potluckId' element={<ChooseItem />} />
          </Route>

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route path="/create" element={<PrivateRoute />}>
            <Route exact path='/create' element={<CreateEvent />} />
          </Route>

          <Route path="/logout" element={<PrivateRoute />}>
            <Route exact path='/logout' element={<Logout />} />
          </Route>

          <Route exact path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
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
