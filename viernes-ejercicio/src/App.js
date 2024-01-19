import './App.css';
import Login from './components/Login'
import Registro from './components/Registro';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return(
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route path="./Login" element={<Login/>}/>
              <Route path="./Registro" element={<Registro/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );  

}

export default App;
