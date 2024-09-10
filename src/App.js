import './App.css';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<SignIn/>} />
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
