import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './HomePage'
import Register from './Register';
import Login from './Login';
import AddCrop from './AddCrop';
import AfterHome from './AfterHome';
function App() {
  return (
    <div>
      <Router>

        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/afterhome/:id/addcrop' exact component={AddCrop} />
        <Route path='/afterhome/:id' exact component={AfterHome} />
      </Router>
    </div>
  );
}

export default App;
