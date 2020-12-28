import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/' exact component={Home} />
        <Route path='/resume' component ={()=>{
          window.location.replace("https://docs.google.com/document/d/1gqNkd1lzcGV0BBAbKde0F4NNN579jn897dpVBPXyJSQ/edit?usp=sharing");
          return null;
        }} />
      </Switch>
    </Router>



    </>
  );
}

export default App;
