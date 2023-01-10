import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      progress:0
    }
  }
  async componentDidMount() {
    document.querySelector('.btnSearch').addEventListener('click', async () => {
      let searchtext = document.getElementById('searching').value.split(' ').join('+');
      if (!searchtext) {
        alert('input something')
        return;
      }
      this.setState({ search: searchtext })
    })
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar val={this.state.search} />

          <div>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
          </div>

          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key='1' query="General" />} />
            <Route exact path='/international' element={<News setProgress={this.setProgress}  key='2' query="International" />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key='3' query="Sports" />} />
            <Route exact path='/election' element={<News setProgress={this.setProgress}  key='4' query="Election" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='5' query="Health" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key='6' query="Business" />} />
            {this.state.search} && <Route exact path={`/${this.state.search}`} element={<News setProgress={this.setProgress}  key={this.state.search} query={this.state.search} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
