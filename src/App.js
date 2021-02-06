import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>

        <Route path ='/' exact component={Home} />
        <Route path ='/project' exact component={Project} />
        <Route path='/resume' component ={()=>{
          window.location.replace("https://docs.google.com/document/d/1gqNkd1lzcGV0BBAbKde0F4NNN579jn897dpVBPXyJSQ/edit?usp=sharing");
          return null;
        }} />

        <Route path='/blog' component ={()=>{
          window.location.replace("https://zatom01.github.io/");
          return null;
        }} />

        <Route path='/about' exact component={About} />

        <Route path='/contact' exact component={Contact} />

      </Switch>
    </Router>



    </>
  );
}

export default App;
