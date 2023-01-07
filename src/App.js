import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<News key='1' query="bitcoin"/>}/>
        <Route exact path='/international' element={<News key='2' query="international"/>}/>
        <Route exact path='/sports' element={<News key='3' query="nepal+sports"/>}/>
        <Route exact path='/election' element={<News key='4' query="election+nepal"/>}/>
        <Route exact path='/health' element={<News key='4' query="health+nepal"/>}/>
        <Route exact path='/business' element={<News key='5' query="business+nepal"/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}
