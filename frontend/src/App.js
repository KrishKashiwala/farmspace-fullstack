import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Register from './Register';
import Login from './Login';
import AddCrop from './AddCrop';
import AfterHome from './AfterHome';
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
          <Route path="*" component={() => "<h1>404 not found</h1>"} />
        </Switch>


        {/* if no exact route found this page is displayed         */}
        {/* <Route component = {any}/> */}
      </Router>
    </div>
  );
}

export default App;
