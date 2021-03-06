import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Register from './Register';
import Login from './Login';
import AddCrop from './AddCrop';
import AfterHome from './AfterHome';
import ProtectedRoute from './ProtectedRoute'
import TRegister from './TRegister';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/afterhome/addcrop/:id' exact component={AddCrop} />
          <Route path='/afterhome/:id' exact component={AfterHome} />
          <Route path="/tregister" exact component={TRegister} />
          <Route path="*" component={() => "404 not found"} />

        </Switch>


        {/* if no exact route found this page is displayed         */}
        {/* <Route component = {any}/> */}
      </Router>
    </div>
  );
}

export default App;
