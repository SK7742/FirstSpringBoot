import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import footerComponent from './components/footerComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import updateEmployeeComponent from './components/updateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <switch> 
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
            <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
            <Route path = "/update-employee/:id" component = {updateEmployeeComponent}></Route>
          </switch>
        </div>
        <footerComponent />
      </Router>
    </div>
    
  );
}
 
export default App;
